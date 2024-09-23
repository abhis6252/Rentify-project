import React from "react";
import Slider from "react-slick";
import "./ImageSlider.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    "../src/assets/images/slider01.jpg",
    "../src/assets/images/slider02.jpg",
    "../src/assets/images/sloder03.jpg",
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
