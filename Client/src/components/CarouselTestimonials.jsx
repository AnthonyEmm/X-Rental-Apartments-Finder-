import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../components/CarouselTestimonials.css";

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
        <img src="../public/1.png" />
        <div className="myCarousel">
          <h3>Monica Mattos</h3>
          <h4>Zoo Keeper</h4>
          <p>
            "Thanks to X Rental, my move was a breeze! Found the perfect home
            that felt like it was made for me. Elevate your living with X Rental
            – highly recommended!"
          </p>
        </div>
      </div>

      <div className="test-card">
        <img src="../public/2.png" />
        <div className="myCarousel">
          <h3>Lupin</h3>
          <h4>Full Stack WebDev</h4>
          <p>
            "X Rental turned my house-hunting stress into a joyous experience.
            From premium listings to hassle-free rentals, they redefine the way
            we find homes. Discover the difference, just like I did!"
          </p>
        </div>
      </div>

      <div className="test-card">
        <img src="../public/3.png" />
        <div className="myCarousel">
          <h3>Kid Bengal</h3>
          <h4>Plumber</h4>
          <p>
            "Couldn't be happier with my choice to use X Rental. Quality living,
            zero hassle. Found my dream home effortlessly. Trust me, your ideal
            home is just a click away – X Rental delivers!"
          </p>
        </div>
      </div>
    </Carousel>
  );
}

export default CarouselTestimonials;
