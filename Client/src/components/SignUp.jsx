import React from "react";
import "./SignUp.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

function SignUp() {
  const navigate = useNavigate(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,10}$/;
    return passwordRegex.test(password);
  };

  const handleInputChange = (e) => {
    if (e.target.files) {
      setFormData({ ...formData, [e.target.id]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("avatar", formData.avatar);

      const response = await axios.post(
        "http://localhost:4050/auth/signup",
        data,
      );
      if (!validatePassword()) {
        setError("Password must be 8-10 letters and one number!");
        navigate("/login");
      }
      console.log("SignUp Successful:", response.data);
      setSuccess("Sign Up Successful", response.message);
      setError("");
    } catch (error) {
      console.log(error);
      setError("Password must be 8-10 letters and one number!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg text-white">
      <div className="container-main d-flex justify-content-center align-items-center mb-2">
        <div className="title-form rounded-2 d-flex flex-column align-items-center mt-4 mb-4">
          <h4 className="txt mt-5">CREATE ACCOUNT</h4>
          <form onSubmit={handleSignUp} className="container-box">
            <div className="inputs-area d-flex flex-column justify-content-center align-items-center gap-4 mt-4">
              <input
                className="name-contact"
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
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            <label htmlFor="upload" className="upload text-success mt-2">
              Upload Profile Photo
            </label>
            <input
              className="upload"
              type="file"
              onChange={handleInputChange}
              id="avatar"
              accept="image/*"
              required={true}
            />
          </form>
          <button
            className="btn btn-lg rounded-2 mb-3 mt-2"
            onClick={handleSignUp}
            type="submit"
          >
            {loading ? "Signing Up..." : "SIGN UP"}
          </button>
          <Link
            to="/login"
            className="link-login text-decoration-none mb-3 gap-1"
          >
            Back to sign-in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
