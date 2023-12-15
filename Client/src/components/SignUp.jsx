import React from "react";
import "./SignUp.css";
function SignUp() {
  return (
    <div className="bg text-white">
      <div className="container-main d-flex justify-content-center align-items-center mt-5 d-flex">
        <div className="title-form border border-secondary d-flex flex-column align-items-center gap-4 p-4">
          <h1 className="fw-bold">X Rental</h1>
          <h5>Create your account</h5>
          <input
            type="text"
            name="Name"
            id="key"
            placeholder="Name"
            required="true"
          />
          <input
            type="text"
            name="Email"
            id="key"
            placeholder="Email"
            required="true"
          />
          <input
            type="text"
            name="Password"
            id="key"
            placeholder="Password"
            required="true"
          />
          <form className="signup-form">
            <div className="tenant">
              <input type="radio" id="html" name="#" value="HTML" />
              <label for="html">I am looking for a place</label>
            </div>

            <div className="owner">
              <input type="radio" id="html" name="#" value="HTML" />
              <label for="html">I am a property owner</label>
            </div>
          </form>

          <button className="btn btn-outline-success">Register</button>
          <a href="#" className="text-decoration-none">
            Back to sign-in
          </a>
        </div>
        <div className="img-login border border-secondary">
          <img src="../public/berlin.jpg" alt="Berlin landscape" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
