import React from "react";
import "./Upload.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

function Upload() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    bedrooms: "",
    availability: "",
    propertyType: "",
    area: "",
    areaCode: "",
    year: "",
    image: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4050/createlisting",
        formData,
      );

      console.log("Upload Successful:", response.data);
      setSuccess("Property Upload Successful", response.message);
      setError("");
    } catch (error) {
      console.log("Upload failed", error.message);
      setError("Property Upload Failed. Please try again.");
    }
  };

  return (
    <div className="bg text-white">
      <div className="container-main d-flex justify-content-center align-items-center d-flex mt-3">
        <div className="title-form border border-secondary rounded d-flex flex-column align-items-center gap-2 p-3 mb-3">
          <div className="form-header d-flex justify-content-between mb-2">
            <h5 className="fw-bold">Add a property</h5>
            <Link to="/list" className="text-decoration-none text-success">
              Back
            </Link>
          </div>
          <form onSubmit={handleUpload}>
            <div className="t-description d-flex flex-column gap-2 mb-3">
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Title"
              />
              <textarea
                placeholder="Description"
                id="description"
                value={formData.description}
                onChange={handleInputChange}
                cols="48"
                rows="10"
              ></textarea>
            </div>

            <div className="form-body d-flex gap-2 mb-3">
              <div className="left-section d-flex flex-column gap-2">
                <input
                  type="text"
                  id="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Rent price in Euros"
                />
                <select
                  className="select text-secondary"
                  id="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                >
                  <option value="select property">
                    Select type of Property
                  </option>

                  <option value="apartment">Apartment</option>
                  <option value="cottage">Cottage</option>
                  <option value="Duplex">Duplex</option>
                  <option value="house">House</option>
                  <option value="studio">Studio</option>
                </select>
                <input
                  type="text"
                  id="areaCode"
                  value={formData.areaCode}
                  onChange={handleInputChange}
                  placeholder="PLZ"
                />
                <select
                  id="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="select text-secondary"
                >
                  <option value="availability">Availability</option>
                  <option value="vacant">Vacant</option>
                  <option value="rented">Rented</option>
                </select>
              </div>
              <div className="right-section d-flex flex-column gap-2">
                <input
                  type="text"
                  id="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleInputChange}
                  placeholder="Number of rooms"
                />
                <input
                  type="text"
                  id="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  placeholder="Size of property in m²"
                />
                <input
                  type="number"
                  id="year"
                  min="1900"
                  max="2024"
                  value={formData.year}
                  onChange={handleInputChange}
                  placeholder="Building age (YYYY)"
                />

                <input
                  type="file"
                  value={formData.image}
                  onChange={handleInputChange}
                  id="image"
                  alt="img"
                ></input>
              </div>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            <button
              onClick={handleUpload}
              type="button"
              className="btn btn-lg bg-success"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Upload;
