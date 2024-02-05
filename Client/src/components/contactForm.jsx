import "bootstrap/dist/css/bootstrap.min.css";
import "../components/contactForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const ContactForm = () => {
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_39d8p2b",
        "template_ptoue0r",
        form.current,
        "aU8koTSpQeqGZD8Wz"
      )
      .then(
        (result) => {
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const notify = () => {
    toast.success("Email sent Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  /* conditional to the media query of TypeAnimation */

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const textStyle =
    windowWidth < 768
      ? {
          fontSize: "1.1rem",
          display: "flex",
          justifyContent: "center",
          color: "#fff",
          textAlign: "justify",
          marginBottom: "2rem",
        }
      : {
          fontSize: "1.6rem",
          display: "flex",
          justifyContent: "center",
          color: "#fff",
          textAlign: "justify",
          marginBottom: "2rem",
        };

  return (
    <div className="bg">
      <TypeAnimation
        splitter={(str) => str.split(/(?= )/)}
        sequence={[`Write us a message. We'll be glad!`, 1000, ""]}
        speed={{ type: "keyStrokeDelayInMs", value: 100 }}
        repeat={Infinity}
        omitDeletionAnimation={true}
        style={textStyle}
      />
      <div className="container mt-2 mb-4 text-success">
        <div className="head d-flex justify-content-center align-items-center gap-3 mt-3 mb-4">
          <h2>CONTACT FORM</h2>
          <div>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ fontSize: "2rem", color: "rgb(17, 189, 74)" }}
            />
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="form d-flex flex-column gap-2 mb-3"
        >
          <label className="form-label">Name</label>
          <input type="text" name="user_name" required className="user-name" />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="user-email mb-1"
          />
          <label className="form-label">Message</label>
          <textarea
            id="message"
            rows="5"
            cols="30"
            name="message"
            className="form-control mb-4"
            required
          />
          <input
            onClick={notify}
            type="submit"
            value="SEND"
            className="btn-send btn btn-lg rounded-2 mb-5"
          />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
