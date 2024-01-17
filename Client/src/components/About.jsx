import React from "react";
import { useEffect } from "react";
import "../components/About.css";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import eu from "../assets/eu.png";
import meka from "../assets/meka.png";
import dinho from "../assets/dinho.png";

function About() {
  return (
    <div className="bg">
      <div className="section d-flex justify-content-center align-items-center">
        <div className="aboutus d-flex flex-column justify-content-center align-items-center gap-5">
          <div className="text-box">
            <h1 className="mb-5 fw-bolder">About Us</h1>
            <div className="text">
              <TypeAnimation
                splitter={(str) => str.split(/(?= )/)}
                sequence={[
                  `Welcome to X Rental, where the leasing process is simplified and direct.
                  Say goodbye to middlemen and hello to seamless connections between tenants and property owners. Our user-friendly app empowers renters to communicate directly, negotiate terms effortlessly, and secure their ideal home with transparency.
                  We prioritize efficiency, ensuring a swift and hassle-free rental experience. Embrace a new era of renting, where convenience meets control. Join us in redefining the rental landscape, making it personal, straightforward, and uniquely yours.
                  Your dream home is just a click away with our tenant-owner approach.`,
                  500,
                  `Welcome to X Rental, where the leasing process is simplified and direct.
                  Say goodbye to middlemen and hello to seamless connections between tenants and property owners. Our user-friendly app empowers renters to communicate directly, negotiate terms effortlessly, and secure their ideal home with transparency.
                  We prioritize efficiency, ensuring a swift and hassle-free rental experience. Embrace a new era of renting, where convenience meets control. Join us in redefining the rental landscape, making it personal, straightforward, and uniquely yours.
                  Your dream home is just a click away with our tenant-owner approach.`,
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 80 }}
                style={{
                  whiteSpace: "initial",
                  fontSize: "1.1rem",
                  display: "block",
                  minHeight: "40vh",
                  color: "#fff",
                  lineHeight: "2.2rem",
                  textAlign: "justify",
                }}
              />
            </div>
          </div>
          <div className="backPhotos d-flex justify-content-center align-items-center gap-5 mt-5 mb-5">
            <div className="avatar d-flex flex-column justify-content-center align-items-center gap-2 fs-4">
              <Link
                to="https://www.linkedin.com/in/bernard-almeida-da-costa/"
                target="_blank"
              >
                <img src={eu} alt="Bernard Almeida da Costa" />
              </Link>
              <p className="text-light">Bernard Almeida</p>
            </div>
            <div className="avatar d-flex flex-column justify-content-center align-items-center  gap-2 fs-4">
              <Link
                to="https://www.linkedin.com/in/nnaemeka-emesowum/"
                target="_blank"
              >
                <img src={meka} alt="Nnaemeka C. Emesowum" />
              </Link>
              <p className="text-light">Nnaemeka Emesowum</p>
            </div>
            <div className="avatar d-flex flex-column justify-content-center align-items-center  gap-2 fs-4">
              <Link to="https://www.linkedin.com/in/costa-jr/" target="_blank">
                <img src={dinho} alt="Eudes Costa Junior" />
              </Link>
              <p className="text-light">Eudes Costa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
