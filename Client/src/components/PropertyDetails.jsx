import React from "react";
import { useState, useEffect } from "react";
import "../components/PropertyDetails.css";
import { Link, useParams } from "react-router-dom";
import axiosClient from "../axiosClient";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import CommentCard from "./CommentCard";

function PropertyDetails() {
  const [property, setProperty] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getProperty(`/properties/${id}`);
  }, []);

  const getProperty = async (url) => {
    try {
      const response = await axiosClient.get(url);
      setProperty(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  /* --------------Leaflet Logic Area */

  const center = [52.5232, 13.3653];

  /* -------------- Comments Logic Area */
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [submit, setSubmit] = useState([]);
  const [error, setError] = useState(false);

  const handleInputName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleInputComment = (e) => {
    console.log(e.target.value);
    setComment(e.target.value);
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (name === "" || comment === "") {
      /* alert("Please add your Comment!"); */
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      const submitOne = { id: new Date().getTime(), name, comment };
      console.log(submit);
      setSubmit([...submit, submitOne]);

      // Clear input fields
      /* setTitle("");
      setPhoto(""); */
      setName("");
      setComment("");
    }
  };

  // Event handler for removing a comment
  const handleRemoveComment = (commentId) => {
    const updatedSubmit = submit.filter((comment) => comment.id !== commentId);
    setSubmit(updatedSubmit);
  };

  return (
    <div className="bg text-white">
      {property && (
        <div className="container-main d-flex justify-content-center align-items-center d-flex mt-5">
          <div className="list-container border border-secondary rounded d-flex gap-5 p-5">
            <div className="left-side d-flex flex-column gap-5">
              <div className="img mt-2">
                <img src={property.image} />
              </div>
              <div className="comments">
                <form onSubmit={handleSubmitClick}>
                  <div className="comments-section w-100">
                    <input
                      className="name-input"
                      onChange={handleInputName}
                      value={name}
                      type="text"
                      id="name"
                      placeholder="Add your name..."
                    />
                    <div className="input-btn d-flex gap-2">
                      <textarea
                        className="rounded px-2"
                        onChange={handleInputComment}
                        value={comment}
                        id="#"
                        cols="70"
                        rows="3"
                        placeholder="Post your comment..."
                      ></textarea>
                      <button className="btn btn-outline-success" type="submit">
                        Send
                      </button>
                    </div>
                  </div>
                  {error && (
                    <p style={{ color: "red" }}>
                      {error ? "Please add your Name and Comment!" : ""}
                    </p>
                  )}
                  <div className="card-area">
                    {submit.map((subs) => (
                      <CommentCard
                        key={subs.id}
                        subs={subs}
                        onDelete={handleRemoveComment}
                      />
                    ))}
                  </div>
                </form>
              </div>
            </div>
            <div className="right-side">
              <div className="details d-flex flex-column fw-bold">
                <h3>{property.description}</h3>
                <p>
                  <span>Property Size</span>: {property.area} M²
                </p>
                <p>
                  <span>Room(s)</span>: {property.bedrooms}
                </p>
                <p>
                  <span>PLZ</span>: {property.areaCode}
                </p>
                <p>
                  <span>Type</span>: {property.propertyType}
                </p>
                <p>
                  <span>Construction year</span>: {property.year}
                </p>
                <p>
                  <span>Price</span>: €{property.price}/month
                </p>
                <p>
                  <span>Availability</span>: {property.availability}
                </p>
                <p>
                  <span>Owner</span>: {property.owner.name}
                </p>
              </div>

              <div className="map">
                <MapContainer
                  className="custom-leaflet"
                  center={center}
                  zoom={15}
                  style={{ height: "50vh" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Circle
                    center={center}
                    pathOptions={{
                      color: "green",
                      fillColor: "#71a900",
                      fillOpacity: 0.5,
                    }}
                    radius={300}
                  >
                    <Popup>Property Zone Location</Popup>
                  </Circle>
                </MapContainer>
              </div>

              <div className="button-section mt-4 d-flex justify-content-between">
                <Link to="/contact">
                  <button className="btn btn-lg btn-success" type="button">
                    Contact the Owner
                  </button>
                </Link>
                <Link
                  to="/list"
                  className="link-signup text-decoration-none align-self-center "
                >
                  Go back
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyDetails;
