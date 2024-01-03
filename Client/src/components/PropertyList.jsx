import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../components/PropertyList.css";
import { Link } from "react-router-dom";

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getList(`http://localhost:4050/properties`);
  }, []);

  const getList = async (url) => {
    try {
      const response = await axios.get(url);
      setProperties(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setError("Properties not found. Please try again!", error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <p className="loading text-success d-flex flex-column align-items-center mt-5">
        Loading... Please wait!
      </p>
    );
  }

  if (error) {
    return (
      <p className="error text-danger d-flex flex-column align-items-center mt-5">
        {error}
      </p>
    );
  }

  return (
    <div className="bg text-white">
      <div className="container-main d-flex justify-content-center align-items-center d-flex mt-4 mb-4">
        <div className="list-container border border-secondary rounded d-flex flex-column align-items-center gap-4 p-4">
          <div className="search-tags d-flex flex-column gap-2">
            <h1 className="text-center ">Property List</h1>

            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Property..."
            />
            <div className="tags bg-transparent d-flex justify-content-center gap-4">
              <a href="#">Location</a>
              <a href="#">M²</a>
              <a href="#">Price</a>
              <a href="#">Rooms</a>
              <a href="#">Type</a>
              <a href="#">Year</a>
            </div>
          </div>
          <Link
            to="/upload"
            className=" add-listing text-decoration-none  d-flex flex-column align-items-center"
          >
            List a Property
          </Link>
          <div className="list">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {properties.map((property) => (
                <div key={property.id} className="col">
                  <div className="card">
                    <img
                      src={property.image}
                      className="card-img-top"
                      alt="Property Image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{property.title}</h5>
                      <p className="card-text">
                        {property.area}m², {""}
                        {property.bedrooms} rooms
                      </p>
                      <p className="card-text">Type: {property.propertyType}</p>

                      <p className="card-text">
                        Price: €{property.price}/month
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
