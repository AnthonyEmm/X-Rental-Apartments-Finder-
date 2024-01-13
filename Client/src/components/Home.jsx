import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import anime from "animejs";

function Home() {
  useEffect(() => {
    const items = document.querySelectorAll(".cascading-item");

    anime({
      /* targets: items,
      opacity: [0, 1],
      translateY: [20, 0],
      easing: "easeInOutCubic",
      duration: 800,
      delay: anime.stagger(300), */
      targets: items,
      opacity: [0, 1],
      easing: "linear",
      duration: 500,
      delay: anime.stagger(100),
      loop: true, // Enable looping
      direction: "normal", // Reverse the animation on each iteration
    });
  }, []);

  const title = "X Rental";

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
              src="/hero.png"
              alt="Ilustration of a couple receiving their rent contract"
            />

            <section className="cta">
              <h1>Finally rent a flat</h1>
              <p>
                We are <span>X Rental</span> and we help you find an apartment
                in Berlin.
              </p>
              <Link to="/list" className="button">
                <button className="home-buttons">Explore</button>
              </Link>
            </section>
          </header>
        </div>

        <main>
          <div className="green-container">
            <div className="vision">
              <img
                className="home-illustrations"
                src="/vision.png"
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

          <div className="dark-container">
            <div className="benefits">
              <h3>Your benefits</h3>

              <div className="home-card-container">
                <div className="home-cards">
                  <img
                    className="home-illustrations"
                    src="/card1.png"
                    alt="Illustration of a cozy couch."
                  />
                  <h4>Comfort Living</h4>
                  <p>
                    Discover your perfect sanctuary for ease and relaxation.
                  </p>
                </div>

                <div className="home-cards">
                  <img
                    className="home-illustrations"
                    src="/card2.png"
                    alt="Illustration of a couple painting the walls of their living room."
                  />
                  <h4>Personal Touch</h4>
                  <p>
                    Make your home effortlessly to your personalized living
                    space.
                  </p>
                </div>

                <div className="home-cards">
                  <img
                    className="home-illustrations"
                    src="/card3.png"
                    alt="Illustration of a fully-equipped kitchen."
                  />
                  <h4>Chef&apos;s Delight</h4>
                  <p>
                    Indulge in the joy of cooking with pleasure in your own
                    kitchen.
                  </p>
                </div>
              </div>
              <Link to="/list" className="button">
                <button className="home-buttons">Find out more</button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
