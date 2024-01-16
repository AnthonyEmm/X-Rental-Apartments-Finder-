import React from "react";
import "./Update.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import axiosClient from "../axiosClient";

function Update({ id }) {
  const navigate = useNavigate(true);
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,10}$/;
    return passwordRegex.test(password);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("avatar", avatar);

    if (!email) {
      setError("Please Enter Correct Email Address");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!validatePassword()) {
      setError("");
    } else {
      setSuccess(true);
    }

    setLoading(true);

    try {
      const response = await axiosClient.post(`/auth/update/:id`, data, {
        withCredentials: true,
      });
      console.log("User Updated Successfully:", response.data);
      setSuccess(true);
      navigate("/profile");
      setError("");
    } catch (error) {
      console.error(
        "User Update Failed:",
        error.response ? error.response.data : error.message,
      );
      setError("User Update Failed. Please add a profile photo!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg text-white">
      <div className="container-main d-flex justify-content-center align-items-center mt-4 mb-4">
        <div className="title-form rounded d-flex flex-column align-items-center gap-4 p-4">
          <h4 className="update fw-bold mb-5 mt-2">UPDATE ACCOUNT</h4>

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
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
                required={true}
              />
              <span
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  background: "transparent",
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
            <p className="info text-danger fst-italic fs-6 bg-transparent mt-2">
              Password must be 8-10 letters and one number
            </p>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required={true}
            />
            <label
              htmlFor="upload"
              className="upload d-flex justify-content-center align-items-center text-success mt-4 mb-3"
            >
              Update Profile Photo
            </label>
            <input
              className="upload"
              type="file"
              onChange={(e) => {
                setAvatar(e.target.files[0]);
              }}
              id="avatar"
              accept="image/*"
              required={true}
            />
          </div>

          <button onClick={handleUpdate} className="btn btn-lg rounded-2">
            {loading ? "Updating..." : "UPDATE"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && (
            <p style={{ color: "green" }}>User Updated Successfully</p>
          )}
          <Link to="/login" className="link-login text-decoration-none mt-3">
            Back to sign-in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Update;
