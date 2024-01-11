import "bootstrap/dist/css/bootstrap.min.css";
import "../components/contactForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_39d8p2b",
        "template_ptoue0r",
        form.current,
        "aU8koTSpQeqGZD8Wz",
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("email sent!");
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className="bg">
      <div className="container d-flex  mt-4 text-success">
        <div className="header d-flex justify-content-center align-items-center gap-3 mt-3">
          <h2>CONTACT FORM</h2>
          <div>
            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "2rem" }} />
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="form d-flex flex-column gap-2 mt-3 mb-2"
        >
          <label className="form-label">Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label className="form-label">Message</label>
          <textarea
            id="message"
            rows="5"
            cols="30"
            name="message"
            className="form-control mb-3"
          />
          <input
            type="submit"
            value="SEND"
            className="btn btn-lg btn-success mb-5"
          />
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
