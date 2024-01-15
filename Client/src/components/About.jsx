import React from "react";
import { useEffect } from "react";
import "../components/About.css";
import { TypeAnimation } from "react-type-animation";

function About() {
  return (
    <div className="bg">
      <div className="section d-flex align-items-center">
        <div className="aboutus d-flex justify-content-center align-items-center gap-5">
          <div className="backPhotos d-flex flex-column justify-content-center align-items-center p-5 ">
            <div className="avatar d-flex flex-column justify-content-center align-items-center  gap-2 fs-4">
              <img src="/eu.png" alt="" />
              <p className="text-light">Bernard Costa</p>
            </div>
            <div className="avatar d-flex flex-column justify-content-center align-items-center  gap-2 fs-4">
              <img src="/meka.png" alt="" />
              <p className="text-light">Nnaemeka Eme</p>
            </div>
          </div>
          <div className="text-box">
            <h1 className="mb-5 fst-italic">About Us!</h1>
            <div>
              <TypeAnimation
                splitter={(str) => str.split(/(?= )/)}
                sequence={[
                  `Welcome to X Rental, where the leasing process is simplified and direct.
                  Say goodbye to middlemen and hello to seamless connections between tenants and property owners. Our user-friendly app empowers renters to communicate directly, negotiate terms effortlessly, and secure their ideal home with transparency.
                  We prioritize efficiency, ensuring a swift and hassle-free rental experience. Embrace a new era of renting, where convenience meets control. Join us in redefining the rental landscape, making it personal, straightforward, and uniquely yours.
                  Your dream home is just a click away with our tenant-owner approach.`,
                  1000,
                  `Welcome to X Rental, where the leasing process is simplified and direct.
                  Say goodbye to middlemen and hello to seamless connections between tenants and property owners. Our user-friendly app empowers renters to communicate directly, negotiate terms effortlessly, and secure their ideal home with transparency.
                  We prioritize efficiency, ensuring a swift and hassle-free rental experience. Embrace a new era of renting, where convenience meets control. Join us in redefining the rental landscape, making it personal, straightforward, and uniquely yours.
                  Your dream home is just a click away with our tenant-owner approach.`,
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 50 }}
                style={{
                  fontSize: "2rem",
                  display: "block",
                  minHeight: "60vh",
                  color: "rgb(17, 189, 74)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
