import React from "react";
import { useState, useEffect } from "react";
import "../components/PropertyDetails.css";
import { Link, useParams } from "react-router-dom";
import axiosClient from "../axiosClient";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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

  const center = [51.505, -0.09];

  return (
    <div className="bg text-white">
      {property && (
        <div className="container-main d-flex justify-content-center align-items-center d-flex mt-5">
          <div className="list-container border border-secondary rounded d-flex gap-5 p-5">
            <div className="left-side d-flex flex-column gap-5">
              <div className="img">
                <img src={property.image} />
              </div>
              <div className="comments">
                <form>
                  <textarea
                    name=""
                    id=""
                    cols="70"
                    rows="2"
                    placeholder="Post your comment..."
                  ></textarea>
                  <button>Submit</button>
                </form>
              </div>
            </div>
            <div className="right-side">
              <div className="details d-flex flex-column gap-2">
                <h3>{property.description}</h3>
                <p>
                  <span>Property Size</span>: {property.area} M²
                </p>
                <p>
                  <span>Room(s)</span>: {property.bedrooms}
                </p>
                <p>
                  <span>Zip Code</span>: {property.areaCode}
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
                {/* <img src="../public/map.png" alt="" /> */}
                <MapContainer
                  center={center}
                  zoom={13}
                  style={{ height: "100vh" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={center}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
              <div className="button-section mt-4 d-flex justify-content-between">
                <button className="btn btn-lg btn-success" type="button">
                  Contact the Owner
                </button>
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
