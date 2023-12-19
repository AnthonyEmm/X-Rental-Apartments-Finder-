import React from "react";
import "./Update.css";
function Update() {
  return (
    <div className="bg text-white">
      <div className="container-main d-flex justify-content-center align-items-center d-flex mt-5">
        <div className="title-form border border-secondary rounded d-flex flex-column align-items-center gap-4 p-5">
          <h1 className="fw-bold">Profile</h1>
          <h5>Update your account</h5>

          <div className="name-email d-flex flex-column gap-2">
            <input
              type="text"
              name="Email"
              id="email"
              placeholder="Email"
              required={true}
            />
          </div>
          <div className="pass-area d-flex flex-column gap-4">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Current password"
              required={true}
            />
            <input
              type="password"
              name="password"
              id="newpass"
              placeholder="New password"
              required={true}
            />
          </div>
          <button type="button" className="btn btn-outline-success text-light">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Update;
