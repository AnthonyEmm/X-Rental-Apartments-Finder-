import React from "react";
import "./Upload.css";
import { Link } from "react-router-dom";

function Upload() {
  return (
    <div className="bg text-white">
      <div className="container-main d-flex justify-content-center align-items-center d-flex mt-3 mb-3">
        <div className="title-form border border-secondary rounded d-flex flex-column align-items-center gap-3 p-4">
          <div className="form-header d-flex justify-content-between">
            <h4 className="fw-bold text-success">Add a property</h4>
            <Link
              to="/list"
              className="text-decoration-none text-success fw-bold"
            >
              Back
            </Link>
          </div>
          <div className="t-description d-flex flex-column gap-2 ">
            <input
              type="text"
              name="title"
              id="desk"
              placeholder="Title"
              required={true}
            />
            <textarea
              name="description"
              placeholder="Description"
              id="desk"
              cols="48"
              rows="10"
            ></textarea>
          </div>

          <div className="form-body d-flex gap-2">
            <div className="left-section d-flex flex-column gap-2">
              <input
                type="text"
                name="rent price"
                id="key"
                placeholder="Rent price in Euros"
                required={true}
              />
              <select
                name="property"
                id="key"
                required={true}
                className="select text-secondary"
              >
                <option value="select property">Select type of Property</option>
                <option value="apartment">Apartment</option>
                <option value="cottage">Cottage</option>
                <option value="duplex">Duplex</option>
                <option value="flat">Flat</option>
                <option value="house">House</option>
                <option value="studio">Studio</option>
              </select>
              <select
                name="property"
                id="key"
                required={true}
                className="select text-secondary"
              >
                <option value="availability">Availability</option>
                <option value="vacant">Vacant</option>
                <option value="cottage">Rented</option>
              </select>
              <input
                type="text"
                name="post code"
                id="key"
                placeholder="PLZ"
                required={true}
              />
            </div>
            <div className="right-section d-flex flex-column gap-2 ">
              <input
                type="text"
                name="number of rooms"
                id="key"
                placeholder="Number of rooms"
                required={true}
              />
              <input
                type="text"
                name="size of property"
                id="key"
                placeholder="Size of property in m²"
                required={true}
              />
              <input
                type="number"
                id="key"
                name="year"
                min="1900"
                max="2030"
                placeholder="Building age (YYYY)"
                required={true}
              />
              <input type="file" id="key" name="img" accept="image/*" />
            </div>
          </div>
          <button className="btn btn-lg bg-success">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Upload;
