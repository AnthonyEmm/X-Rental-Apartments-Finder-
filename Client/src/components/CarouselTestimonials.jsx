import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../components/CarouselTestimonials.css";
import monica from "../assets/monica.png";
import sheila from "../assets/sheila.png";
import muhamed from "../assets/muhamed.png";
import tomas from "../assets/tomas.png";

function CarouselTestimonials() {
  return (
    <Carousel
      className="photos-carousel"
      showArrows={false}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <div className="test-card">
        <img src={monica} />
        <div className="myCarousel">
          <h3>Monica Mattos</h3>
          <h4>Sales Manager</h4>
          <p>
            Thanks to X Rental, my move was a breeze! Found the perfect home
            that felt like it was made for me. Elevate your living with X Rental
            – highly recommended!
          </p>
        </div>
      </div>

      <div className="test-card">
        <img src={sheila} />
        <div className="myCarousel">
          <h3>Sheila Carvalho</h3>
          <h4>Full Stack Web Developer</h4>
          <p>
            X Rental turned my house-hunting stress into a joyous experience.
            From premium listings to hassle-free rentals, they redefine the way
            we find homes. Discover the difference, just like I did!
          </p>
        </div>
      </div>

      <div className="test-card">
        <img src={muhamed} />
        <div className="myCarousel">
          <h3>Mustafa Al Shamud</h3>
          <h4>Physics Teacher</h4>
          <p>
            Couldn't be happier with my choice to use X Rental. Quality living,
            zero hassle. Found my dream home effortlessly. Trust me, your ideal
            home is just a click away – X Rental delivers!
          </p>
        </div>
      </div>
      <div className="test-card">
        <img src={tomas} />
        <div className="myCarousel">
          <h3>Tomas Müller</h3>
          <h4> Data Scientist</h4>
          <p>
            X Rental I would recommend to any tenant to search for and deal with
            property owners. Awesome experience I must say!
          </p>
        </div>
      </div>
    </Carousel>
  );
}

export default CarouselTestimonials;
