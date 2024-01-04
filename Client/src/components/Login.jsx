import React from "react";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg text-white">
        <div className="container-main d-flex justify-content-center align-items-center mt-4 ">
          <div className="title-form border border-secondary rounded-2 d-flex flex-column align-items-center gap-4 p-4">
            <h1 className="fw-bold">X Rental</h1>
            <h3 className="login text-success">Sign In</h3>

            <form className="container">
              <input
                type="text"
                name="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required={true}
              />
              <br />
              <br />
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </span>
              </div>
              <Link
                to="/Update"
                className="fw-bold text-success text-decoration-none bg-transparent gap-4 p-4"
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
              <br />
              <button
                className="btn btn-lg bg-success"
                type="button"
                onClick={handleLogin}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>
            <Link to="/sign-up" className="text-decoration-none text-success">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
