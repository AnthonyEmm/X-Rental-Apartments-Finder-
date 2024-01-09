import React from "react";
import "./Upload.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../axiosClient";

function Upload() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(true);
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
      const response = await axiosClient.post("/createlisting", data);

      console.log("Upload Successful:", response.data);
      setSuccess(true);
      navigate("/list");
      setError("");
    } catch (error) {
      console.log(
        "Upload Failed:",
        error.response ? error.response.data : error.message
      );
      setError("Property Upload Failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg">
      <div className="container-main d-flex justify-content-center align-items-center d-flex mt-4 ">
        <div className="title-form border border-secondary rounded d-flex flex-column align-items-center gap-2 p-3 mb-4">
          <div className="form-header d-flex justify-content-between mb-2">
            <h5 className="fw-bold mt-2">Add a property</h5>
            <Link
              to="/list"
              className="link-signup text-decoration-none mt-2"
              title="Go back"
            >
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
                placeholder="Short title"
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
                  title="Select a Property type"
                >
                  <option value="select property">
                    Select type of Property
                  </option>

                  <option value="Apartment">Apartment</option>
                  <option value="Cottage">Cottage</option>
                  <option value="Duplex">Duplex</option>
                  <option value="House">House</option>
                  <option value="Studio">Studio</option>
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
                  title="Availability"
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
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && (
            <p style={{ color: "green" }}>Property Upload Successful!</p>
          )}
          <button
            onClick={handleUpload}
            type="submit"
            className="btn btn-lg btn-success m-2"
          >
            {loading ? "Uploading..." : "SUBMIT"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Upload;
