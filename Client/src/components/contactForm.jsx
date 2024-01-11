// import { useState } from "react";
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../components/contactForm.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     console.log(formData);
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // I will Handle form submission logic here //
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="bg">
//       <div className="container d-flex  mt-4 text-success">
//         <div className="header d-flex justify-content-center align-items-center gap-3 mt-4">
//           <h2>CONTACT FORM</h2>
//           <div>
//             <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "2rem" }} />
//           </div>
//         </div>
//         <form
//           onSubmit={handleSubmit}
//           className="form d-flex flex-column gap-4 mt-4 mb-2"
//         >
//           <div className="">
//             <label htmlFor="name" className="form-label">
//               Name:
//             </label>
//             <input
//               type="text"
//               className="name-contact form-control"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="">
//             <label htmlFor="email" className="form-label">
//               Email:
//             </label>
//             <input
//               type="email"
//               className="email-contact form-control"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="">
//             <label htmlFor="message" className="form-label">
//               Message:
//             </label>
//             <textarea
//               className="form-control"
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="5"
//               cols="30"
//               required
//             />
//           </div>
//           <button className="btn btn-lg btn-success mb-5" type="button">
//             SUBMIT
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/contactForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Elastic Email API endpoint
    const apiUrl = "https://api.elasticemail.com/v2/email/send";

    // Elastic Email API key
    const password = "9DC1DAFD33DF60CB6BB64D7B1E40584899DF";

    const emailData = {
      from: "nna.emesowum@gmail.com",
      fromName: formData.name,
      to: "emesowumn@gmail.com",
      subject: "New Message",
      bodyText: formData.message,
      isTransactional: true,
    };

    try {
      const response = await axios.post(apiUrl, emailData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: "nna.emesowum@gmail.com",
          password: password,
          Host: "smtp.elasticemail.com",
        },
      });

      console.log("Email sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending email:", error.message);
    }
  };

  return (
    <div className="bg">
      <div className="container d-flex  mt-4 text-success">
        <div className="header d-flex justify-content-center align-items-center gap-3 mt-4">
          <h2>CONTACT FORM</h2>
          <div>
            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "2rem" }} />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="form d-flex flex-column gap-4 mt-4 mb-2"
        >
          <div className="">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="name-contact form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="email-contact form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="">
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
          <button
            onClick={handleSubmit}
            className="btn btn-lg btn-success mb-5"
            type="button"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
