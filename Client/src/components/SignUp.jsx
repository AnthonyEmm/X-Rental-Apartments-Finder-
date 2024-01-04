import React from "react";
import "./SignUp.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

function SignUp() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4050/auth/signup",
        formData
      );

      console.log("SignUp Successful:", response.data);
      setSuccess("Sign Up Successful. Please login", response.message);
      setError("");
    } catch (error) {
      console.log(error);
      setError("Invalid credentials. SignUp failed!");
    }
  };

  return (
    <div className="bg">
      <div className="container-main d-flex justify-content-center align-items-center mt-4 mb-20">
        <div className="title-form border border-secondary rounded-2 d-flex flex-column align-items-center gap-1 p-3">
          <h1 className="fw-bold">X Rental</h1>
          <h5>Create your account</h5>
          <form onSubmit={handleSignUp} className="container gap-3">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required={true}
            />

            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required={true}
            />

            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required={true}
              />
              <span
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
                onClick={handleTogglePasswordVisibility}
              >
                {showPassword ? (
                  <FontAwesomeIcon icon={faEye} color="#fff" />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    color="#fff"
                    style={{ opacity: 0.7 }}
                  />
                )}
              </span>
            </div>
            <p className="info text-danger align-self-center  mt-2">
              Password must be 8-10 letters and one number
            </p>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

            <button
              className="btn btn-lg bg-outline-success"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </form>
          <Link to="/login" className="link-login text-decoration-none">
            Back to sign-in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
