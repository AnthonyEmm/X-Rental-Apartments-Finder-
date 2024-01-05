import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../components/PropertyDetails.css";

function PropertyDetails() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getList(`http://localhost:5050/properties`);
  }, []);

  const getList = async (url) => {
    try {
      const response = await axios.get(url);
      setProperties(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg text-white">
      <div className="container-main d-flex justify-content-center align-items-center d-flex mt-5">
        <div className="list-container border border-secondary rounded d-flex gap-5 p-5">
          {properties.map((property) => {
            return (
              <div className="details" key={property.id}>
                <p>
                  <img src={property.image} />
                </p>
                <h2>Title: {property.title}</h2>
                <h3>Description: {property.description}</h3>
                <h3>Property Size: {property.area}</h3>
                <h3>Rooms: {property.rooms}</h3>
                <h3>Zip Code: {property.areaCode}</h3>
                <h3>Type: {property.propertyType}</h3>
                <h3>Year: {property.year}</h3>
                <h3>Price: {property.price}</h3>
                <h3>Availability: {property.availability}</h3>
                {/* <h3>Owner: {property.owner}</h3> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
