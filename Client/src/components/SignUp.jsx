import React from "react";
import "./SignUp.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SignUp() {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4050/auth/signup",
        formData,
      );

      console.log("SignUp successful:", response.data);
    } catch (error) {
      console.log(error);
      setError("Invalid credentials. Please try again");
    }
  };

  return (
    <div className="bg text-white">
      <div className="container-main d-flex justify-content-center align-items-center mt-4">
        <div className="title-form border border-secondary rounded-2 d-flex flex-column align-items-center gap-4 p-4">
          <h1 className="fw-bold">X Rental</h1>
          <h5>Create your account</h5>
          <form onSubmit={handleSignUp} className="container">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
            />
            <br />
            <br />
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
            <br />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required={true}
            />
            <br />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <br />
            {/* <form className="signup-form">
            <div className="tenant">
              <input type="radio" id="html" name="#" value="HTML" />
              <label for="html">I am looking for a place</label>
            </div>

            <div className="owner">
              <input type="radio" id="html" name="#" value="HTML" />
              <label for="html">I am a property owner</label>
            </div>
          </form> */}
            <button className="btn btn-lg bg-success" onClick={handleSignUp}>
              Sign Up
            </button>
          </form>
          <Link to="/login" className="text-decoration-none text-success">
            Back to sign-in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
