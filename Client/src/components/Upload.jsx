import React from "react";
import "./Upload.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

function Upload() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
    if (e.target.type === "file") {
      setFormData({ ...formData, [e.target.id]: e.target.files });
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const handleUpload = async (e) => {
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("bedrooms", formData.bedrooms);
    data.append("availability", formData.availability);
    data.append("propertyType", formData.propertyType);
    data.append("area", formData.area);
    data.append("areaCode", formData.areaCode);
    data.append("year", formData.year);
    data.append("image", formData.image[0]);

    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:4050/createlisting",
        data,
      );

      console.log("Upload Successful:", response.data);
      setSuccess(true);
      setError("");
    } catch (error) {
      console.log(
        "Upload Failed:",
        error.response ? error.response.data : error.message,
      );
      setError("Property Upload Failed. Please try again.");
    } finally {
      setLoading(false);
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
                required={true}
              />
              <textarea
                placeholder="Description"
                id="description"
                value={formData.description}
                onChange={handleInputChange}
                required={true}
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
                  required={true}
                />
                <select
                  className="select text-secondary"
                  id="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  required={true}
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
                  required={true}
                />
                <select
                  id="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  required={true}
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
                  required={true}
                />
                <input
                  type="text"
                  id="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  placeholder="Size of property in m²"
                  required={true}
                />
                <input
                  type="number"
                  id="year"
                  min="1900"
                  max="2024"
                  value={formData.year}
                  onChange={handleInputChange}
                  placeholder="Building age (YYYY)"
                  required={true}
                />

                <input
                  type="file"
                  onChange={handleInputChange}
                  id="image"
                  accept="image/*"
                  required={true}
                ></input>
              </div>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && (
              <p style={{ color: "green" }}>Property Upload Successful!</p>
            )}
          </form>
          <button
            onClick={handleUpload}
            type="submit"
            className="btn btn-lg bg-success"
          >
            {loading ? "Uploading..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Upload;
