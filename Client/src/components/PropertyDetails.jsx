import React from "react";
import { useState, useEffect } from "react";
import "../components/PropertyDetails.css";
import { Link, useParams } from "react-router-dom";
import axiosClient from "../axiosClient";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import CommentCard from "./CommentCard";
import ImageGallery from "react-image-gallery";

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
  const center = [52.5232, 13.3653];
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [submit, setSubmit] = useState([]);
  const [error, setError] = useState(false);

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handleInputComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (name === "" || comment === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      const submitOne = { id: new Date().getTime(), name, comment };
      setSubmit([...submit, submitOne]);
      setName("");
      setComment("");
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleSubmitClick(e);
      }
    };
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [handleSubmitClick]);

  const handleRemoveComment = (commentId) => {
    const updatedSubmit = submit.filter((comment) => comment.id !== commentId);
    setSubmit(updatedSubmit);
  };

  return (
    <div className="bg text-white">
      {property && (
        <div className="container-main d-flex justify-content-center align-items-center d-flex mt-5">
          <div className="list-container d-flex flex-column rounded gap-5 p-5 w-75 ">
            <div className="left-side d-flex justify-content-center gap-5">
              <div className="img">
                <ImageGallery
                  additionalClass=""
                  items={property.images?.map((image) => {
                    return {
                      original: image,
                      thumbnail: image,
                    };
                  })}
                />
              </div>
              <div className="details d-flex flex-column fw-bold">
                <h3>{property.description}</h3>
                <p>
                  <span>Type</span>: {property.propertyType}
                </p>
                <p>
                  <span>Room(s)</span>: {property.bedrooms}
                </p>
                <p>
                  <span>Price</span>: €{property.price}/month
                </p>
                <p>
                  <span>Zip Code</span>: {property.areaCode}
                </p>

                <p>
                  <span>Property Size</span>: {property.area} M²
                </p>

                <p>
                  <span>Construction year</span>: {property.year}
                </p>

                <p>
                  <span>Owner</span>: {property.owner.name}
                </p>
                <div className="button-section mt-5 d-flex  justify-content-between">
                  <Link to={`/profile/${property.owner._id}`}>
                    <button
                      className="btn btn-lg btn-success rounded-1 "
                      type="button"
                    >
                      OWNER DETAILS
                    </button>
                  </Link>
                  <Link
                    to="/list"
                    className="btn btn-lg btn-success rounded-1 text-black "
                  >
                    Go back
                  </Link>
                </div>
              </div>
            </div>
            <div className="right-side d-flex align-items-center  gap-5">
              <div className="map">
                <h3>View Location</h3>
                <MapContainer
                  className="custom-leaflet"
                  center={center}
                  zoom={15}
                  style={{
                    height: "50vh",
                    width: "610px",
                  }}
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
                      scrollWheelZoom: false,
                    }}
                    radius={500}
                  >
                    <Popup>Property Location</Popup>
                  </Circle>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyDetails;
