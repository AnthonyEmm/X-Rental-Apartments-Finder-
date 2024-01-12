import { useContext } from "react";
import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { AuthContext } from "../context/AuthProvider";

function Login() {
  const navigate = useNavigate(true);
  const { user, login } = useContext(AuthContext);
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
      login({
        email,
        password,
      });

      setSuccess(true);
      navigate("/");
      setError("");
    } catch (error) {
      console.log("Login Failed:", error);
      setError("Incorrect Email or Password. Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg text-white">
        <div className="container-main d-flex justify-content-center align-items-center mt-5 mb-5">
          <div className="title-form border border-secondary rounded-2 d-flex flex-column align-items-center gap-5 p-5">
            <h3 className="login mt-4">LOGIN</h3>

            <form className="container-box d-flex gap-5">
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
              <Link
                to="#"
                className="link-signup text-decoration-none gap-3 p-3"
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
                onClick={handleLogin}
                className="btn btn-lg bg-success"
                type="button"
              >
                {loading ? "Signing In..." : "SIGN IN"}
              </button>
            </form>
            <Link to="/sign-up" className="link-signup text-decoration-none">
              Don't have an account?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
