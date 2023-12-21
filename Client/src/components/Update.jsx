import React from "react";
import "./Update.css";
function Update() {
  return (
    <div className="bg text-white">
      <div className="container-main d-flex justify-content-center align-items-center d-flex mt-5 mb-4">
        <div className="title-form border border-secondary rounded d-flex flex-column align-items-center gap-4 p-5">
          <h1 className="fw-bold">Profile</h1>
          <h5>Update your account</h5>

          <div className="name-email d-flex flex-column gap-2 mb-2">
            <input
              type="text"
              name="Email"
              id="email"
              placeholder="Email"
              required={true}
            />
          </div>
          <div className="pass-area d-flex flex-column gap-1">
            <input
              type="password"
              name="password"
              id="newpassword"
              placeholder="New password"
              required={true}
            />
            <p className="info text-danger fs-6 bg-transparent mt-2">
              Must contain 8-10 letters and one number
            </p>
            <input
              type="password"
              name="password"
              id="newpass"
              placeholder="Add new password"
              required={true}
            />
          </div>

          <button className="btn btn-lg bg-success">Save</button>
          <a href="/login" className="text-decoration-none text-success">
            Back to sign-in
          </a>
        </div>
      </div>
    </div>
  );
}

export default Update;
