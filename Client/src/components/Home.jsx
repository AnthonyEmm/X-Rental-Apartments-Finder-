import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import anime from "animejs";
import CarouselTestimonials from "./CarouselTestimonials";
import { useInView } from "react-intersection-observer";
import vision from "../assets/vision.png";
import hero from "../assets/hero.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Home() {
  useEffect(() => {
    const items = document.querySelectorAll(".cascading-item");

    anime({
      targets: items,
      opacity: [0, 1],
      easing: "linear",
      duration: 500,
      delay: anime.stagger(100),
      loop: true,
      direction: "normal",
      begin: () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      },
    });
  }, []);

  const title = "X Rental";

  const { ref: greenRef, inView: greenInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: darkRef, inView: darkInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <div id="home">
        <div className="title-overlay d-flex justify-content-center align-items-center">
          {title.split("").map((char, index) => (
            <h1 key={index} className="cascading-item">
              {char}
            </h1>
          ))}
        </div>
        <div className="dark-container">
          <header className="header">
            <img
              className="home-illustrations"
              src={hero}
              alt="Ilustration of a couple receiving their rent contract"
            />

            <section className="cta">
              <h1>Finally rent a flat</h1>
              <p>
                We are <span>X Rental</span> and we help you find an apartment
                in Berlin.
              </p>
              <Link to="/listings" className="button">
                <button className="btn btn-lg rounded-2">Explore</button>
              </Link>
            </section>
          </header>
        </div>

        <main>
          <div
            className={`green-container ${greenInView ? "slider" : ""}`}
            ref={greenRef}
          >
            <div className="vision">
              <img
                className="home-illustrations"
                src={vision}
                alt="Ilustration of inside a flat"
              />
              <div className="message">
                <h2>Your sweet home</h2>
                <p>
                  We believe everyone should choose where they want to live❤️
                  <br />
                  <strong>It&apos;s up to you!</strong>
                </p>
              </div>
            </div>
          </div>

          <div
            className={`dark-container ${darkInView ? "jumper" : ""}`}
            ref={darkRef}
          >
            <div className="benefits">
              <h3>Your benefits</h3>

              <div className="home-card-container">
                <div className="card1">
                  <div className="home-cards">
                    <img
                      className="home-illustrations"
                      src={card1}
                      alt="Illustration of a cozy couch."
                    />
                    <h4>Comfort Living</h4>
                    <p>
                      Discover your perfect sanctuary for ease and relaxation.
                    </p>
                  </div>
                </div>

                <div className="card2">
                  <div className="home-cards">
                    <img
                      className="home-illustrations"
                      src={card2}
                      alt="Illustration of a couple painting the walls of their living room."
                    />
                    <h4>Personal Touch</h4>
                    <p>
                      Make your home effortlessly to your personalized living
                      space.
                    </p>
                  </div>
                </div>

                <div className="card3">
                  <div className="home-cards">
                    <img
                      className="home-illustrations"
                      src={card3}
                      alt="Illustration of a fully-equipped kitchen."
                    />
                    <h4>Chef&apos;s Delight</h4>
                    <p>
                      Indulge in the joy of cooking with pleasure in your own
                      kitchen.
                    </p>
                  </div>
                </div>
              </div>
              <h1 className="text-light text-uppercase fw-bolder ">
                We are X Rental!
              </h1>
            </div>
          </div>
          <div className="testimonials-header d-flex justify-content-center align-items-center">
            <div className="test-container">
              <h1>Testimonials</h1>
              <CarouselTestimonials />
              <button
                className="top-btn"
                title="Back to Top"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: "2em" }} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
