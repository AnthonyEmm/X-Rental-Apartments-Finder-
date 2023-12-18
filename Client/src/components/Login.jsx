import React from "react";
import "./Login.css";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:4050/auth/login", {
        email,
        password,
      });

      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login failed:", error.response.data);
    }
  };

  return (
    <div className="bg text-white">
      <div className="container-main d-flex justify-content-center align-items-center mt-4 ">
        <div className="title-form border border-secondary rounded-2 d-flex flex-column align-items-center gap-5 p-5">
          <h1 className="fw-bold">X Rental</h1>
          <h3 className="login text-success">Sign in to Explore</h3>
          <form className="container">
            <input
              type="text"
              name="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required="true"
            />
            <br />
            <br />
            <input
              type="password"
              name="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required="true"
            />
            <br />
            <br />
            <button className="btn" type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
          <a href="#" className="text-decoration-none text-success">
            Create an account
          </a>
        </div>
        {/* <div className="img-login border border-secondary">
          <img src="/berlin.jpg" alt="Berlin landscape" />
        </div> */}
      </div>
    </div>
  );
}

export default Login;
