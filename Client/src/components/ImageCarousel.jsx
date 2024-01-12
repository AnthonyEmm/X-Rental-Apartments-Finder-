import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    /* nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />, */
  };

  const images = [
    "../public/ap.png",
    "../public/ap.png",
    "../public/ap.png",
    "../public/ap.png",
    "../public/ap.png",
    "../public/ap.png",
    "../public/ap.png",
    // Add more image URLs as needed
  ];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
}

export default ImageCarousel;
