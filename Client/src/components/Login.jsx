import React from "react";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    try {
      const response = await axios.post("http://localhost:4050/auth/login", {
        email,
        password,
      });

      console.log("Login Successful:", response.data);
      setSuccess(true);
      setError("");
    } catch (error) {
      console.log("Login Failed:", error.response.data);
      setError(true);
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="bg ">
        <div className="container-main d-flex justify-content-center align-items-center mt-5">
          <div className="title-form border border-secondary rounded-2 d-flex flex-column align-items-center gap-4 p-4">
            <h1 className="fw-bold">X Rental</h1>
            {/* <h3 className="login text-success">Sign In</h3> */}

            <form className="container gap-3">
              <input
                type="text"
                name="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required={true}
              />

              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
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
                  {/* {showPassword ? "👀" : "🔒"} */}
                </span>
              </div>
              <Link
                to="/Update"
                className="link-signup text-decoration-none p-4"
              >
                Forgot Password?
              </Link>
              {error && (
                <p style={{ color: "red" }}>
                  {error ? "Incorrect Email or Password" : ""}
                </p>
              )}
              {success && (
                <p style={{ color: "green" }}>
                  {success ? "Login Successful" : ""}
                </p>
              )}

              <button
                className="btn btn-lg btn-outline-success"
                type="button"
                onClick={handleLogin}
              >
                Sign In
              </button>
            </form>
            <Link to="/sign-up" className="link-signup text-decoration-none">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
