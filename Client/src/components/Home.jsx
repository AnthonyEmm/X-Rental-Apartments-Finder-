import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div id="home">
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
                We are <span>X Rental</span> and we help you finding an
                apartment in Berlin.
              </p>
              <Link to="/login" className="button">
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
                  <p>Find your perfect relaxation spot.</p>
                </div>

                <div className="home-cards">
                  <img
                    className="home-illustrations"
                    src="/card2.png"
                    alt="Illustration of a couple painting the walls of their living room."
                  />
                  <h4>Personal Touch</h4>
                  <p>Make a space your own with ease.</p>
                </div>

                <div className="home-cards">
                  <img
                    className="home-illustrations"
                    src="/card3.png"
                    alt="Illustration of a fully-equipped kitchen."
                  />
                  <h4>Chef&apos;s Delight</h4>
                  <p>Enjoy cooking in a dream kitchen.</p>
                </div>
              </div>
              <Link to="/login" className="button">
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
