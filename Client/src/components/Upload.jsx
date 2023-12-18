import React from "react";
import "./Upload.css";
function Upload() {
  return (
    <div className="bg text-white">
      <div className="container-main d-flex justify-content-center align-items-center d-flex mt-5">
        <div className="title-form border border-secondary rounded d-flex flex-column align-items-center gap-3 p-4">
          <div className="form-header d-flex justify-content-between">
            <h5 className="fw-bold">Add a property</h5>
            <a className="text-decoration-none" href="#">
              Back
            </a>
          </div>
          <div className="t-description d-flex flex-column gap-2">
            <input
              type="text"
              name="title"
              id="desk"
              placeholder="Title"
              required="true"
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
                placeholder="Rent price in euros"
                required="true"
              />
              <select name="property" id="key" required="true">
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
                id="key"
                placeholder="PLZ"
                required="true"
              />
              {/* <button id="key">Upload an image</button> */}
            </div>
            <div className="right-section d-flex flex-column gap-2">
              <input
                type="text"
                name="number of rooms"
                id="key"
                placeholder="Number of rooms"
                required="true"
              />
              <input
                type="text"
                name="size of property"
                id="key"
                placeholder="Size of property in m²"
                required="true"
              />
              <input
                type="number"
                id="key"
                name="year"
                min="1750"
                max="2023"
                placeholder="Building age (YYYY)"
                required="true"
              />
              <input type="file" id="key" name="img" accept="image/*"></input>
            </div>
          </div>
          <button type="button" className="btn btn-outline-success">
            Submit
          </button>
          {/* <a href="#" className="text-success text-decoration-none">
            Create an account
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Upload;
