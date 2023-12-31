import React from "react";
import "./Upload.css";
function Upload() {
  return (
    <div className="bg text-white">
      <div className="container-main d-flex justify-content-center align-items-center d-flex mt-5">
        <div className="title-form border border-secondary rounded d-flex flex-column align-items-center gap-2 p-4">
          <div className="form-header d-flex justify-content-between mb-2">
            <h5 className="fw-bold">Add a property</h5>
            <a className="text-decoration-none" href="#">
              Back
            </a>
          </div>
          <div className="t-description d-flex flex-column gap-2 mb-3">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              required="true"
            />
            <textarea
              name="description"
              placeholder="Description"
              id="description"
              cols="48"
              rows="10"
            ></textarea>
          </div>

          <div className="form-body d-flex gap-2 mb-3">
            <div className="left-section d-flex flex-column gap-2">
              <input
                type="text"
                name="rent price"
                id="price"
                placeholder="Rent price in euros"
                required="true"
              />
              <select
                className="select text-secondary"
                name="property"
                id="propertyType" //propertyType
                required="true"
              >
                <option value="select property">Select type of Property</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="flat">Flat</option>
                <option value="studio">Studio</option>
                <option value="duplex">Duplex</option>
              </select>
              <input
                type="text"
                name="post code"
                id="areaCode"
                placeholder="PLZ"
                required="true"
              />
              <select
                name="property"
                id="availability"
                required={true}
                className="select text-secondary"
              >
                <option value="availability">Availability</option>
                <option value="vacant">Vacant</option>
                <option value="cottage">Rented</option>
              </select>
            </div>
            <div className="right-section d-flex flex-column gap-2">
              <input
                type="text"
                name="number of rooms"
                id="bedrooms"
                placeholder="Number of rooms"
                required="true"
              />
              <input
                type="text"
                name="size of property"
                id="area"
                placeholder="Size of property in m²"
                required="true"
              />
              <input
                type="number"
                id="year"
                name="year"
                min="1750"
                max="2023"
                placeholder="Building age (YYYY)"
                required="true"
              />

              <input type="file" id="image" name="img"></input>
            </div>
          </div>

          <button type="button" className="btn btn-outline-success">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Upload;
