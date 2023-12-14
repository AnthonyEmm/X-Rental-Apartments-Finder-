import React from "react";
import "./Update.css";
function Update() {
  return (
    <div className="bg text-white">
      <div className="container-main d-flex justify-content-center align-items-center d-flex mt-5">
        <div className="title-form border border-secondary rounded d-flex flex-column align-items-center gap-4 p-5">
          <h1 className="fw-bold">Profile Photo</h1>
          <h5>Update your account</h5>

          <div className="name-email d-flex flex-column gap-2">
            <input
              type="text"
              name="Email"
              id="key"
              placeholder="Email"
              required="true"
            />
            <input
              type="text"
              name="Password"
              id="key"
              placeholder="Password"
              required="true"
            />
          </div>
          <div className="pass-area d-flex flex-column gap-2">
            <input
              type="text"
              name="Current password"
              id="key"
              placeholder="Current password"
              required="true"
            />
            <input
              type="text"
              name="New password"
              id="key"
              placeholder="New password"
              required="true"
            />
          </div>
          <button className="text-dark" id="key">
            Save
          </button>
          {/* <a href="#" className="text-success text-decoration-none">
            Create an account
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Update;
