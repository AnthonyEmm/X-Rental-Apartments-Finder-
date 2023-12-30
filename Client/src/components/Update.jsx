import React from "react";
import "./Update.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Update({ id }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:4050/auth/update/${id}`,
        {
          email,
          password,
        },
      );
      console.log("User Updated Successfully:", response.data);
      setSuccess(true);
      setError("");
    } catch (error) {
      console.error(
        "User Update Failed:",
        error.response ? error.response.data : error.message,
      );
      setError("User Update Failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg text-white">
      <div className="container-main d-flex justify-content-center align-items-center d-flex mt-4 mb-4">
        <div className="title-form border border-secondary rounded d-flex flex-column align-items-center gap-4 p-4">
          <h1 className="fw-bold">Profile</h1>
          <h5>Update your account</h5>

          <div className="name-email d-flex flex-column gap-2 mb-2">
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required={true}
            />
          </div>
          <div className="pass-area d-flex flex-column gap-1">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New password"
              required={true}
            />
            <p className="info text-danger fs-6 bg-transparent mt-2">
              Must contain 8-10 letters and one number
            </p>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required={true}
            />
          </div>

          <button onClick={handleUpdate} className="btn btn-lg bg-success">
            {loading ? "Updating..." : "Update"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && (
            <p style={{ color: "green" }}>User Updated Successfully</p>
          )}
          <Link to="/login" className="text-decoration-none text-success">
            Back to sign-in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Update;
