import React from "react";
import "./Login.css";
/* import image from "../assets/berlin.jpg"; */

function Login() {
  return (
    <div className="bg text-white">
      <div className="container-main d-flex justify-content-center align-items-center mt-3 d-flex">
        <div className="title-form border border-primary-subtle d-flex flex-column align-items-center gap-5 p-5">
          <h1 className="fw-bold">X Rental</h1>
          <h5>Make your login</h5>

          <input type="text" name="Email" id="key" placeholder="Email" />
          <input type="text" name="Password" id="key" placeholder="Password" />
          <button className="text-dark" id="key">
            Sign-in
          </button>
          <a href="#" className="text-success text-decoration-none">
            Create an account
          </a>
        </div>
        <div className="img-login border border-primary-subtle">
          <img src="../public/berlin.jpg" alt="Berlin landscape" />
        </div>
      </div>
    </div>
  );
}

export default Login;
