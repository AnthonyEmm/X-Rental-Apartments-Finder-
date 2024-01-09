import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/contactForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    console.log(formData);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // I will Handle form submission logic here //
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg">
      <div className="container mt-4 text-success">
        <div className="header d-flex justify-content-center align-items-center gap-3">
          <h2>Contact Form</h2>
          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "1.7rem" }} />
        </div>
        <form
          onSubmit={handleSubmit}
          className="form d-flex flex-column gap-5 mt-4 mb-2"
        >
          <div className="d-flex gap-2">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-flex gap-2">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-flex gap-2">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              cols="30"
              required
            />
          </div>
          <button className="btn btn-lg btn-success" type="button">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
