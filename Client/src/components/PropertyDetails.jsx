import React from "react";
import { useState, useEffect } from "react";
import "../components/PropertyDetails.css";
import { Link, useParams } from "react-router-dom";
import axiosClient from "../axiosClient";

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
  return (
    <div className="bg text-white">
      <Link
        to="/list"
        className="link-signup text-decoration-none mt-2"
        title="Go back"
      >
        Back
      </Link>
      {property && (
        <div className="container-main d-flex justify-content-center align-items-center d-flex mt-5">
          <div className="list-container border border-secondary rounded d-flex gap-5 p-5">
            <div className="left-side">
              <p className="img w-25">
                <img src={property.image} />
              </p>
              <h3>{property.description}</h3>
              <h3>Property Size: {property.area} M²</h3>
              <h3>Room(s): {property.bedrooms}</h3>
              <h3>Zip Code: {property.areaCode}</h3>
              <h3>Type: {property.propertyType}</h3>
              <h3>Construction year: {property.year}</h3>
              <h3>Price: €{property.price}/month</h3>
              <h3>Availability: {property.availability}</h3>
              <h3>Owner: {property.owner.name}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyDetails;
