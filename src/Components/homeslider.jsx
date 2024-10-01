import React from "react";
import '../Components/homeSlider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { items } from "./Data";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="wrapper">
      <Slider {...settings} className="carousel">
        {items.map((exploreItem) => (
          <div key={exploreItem.id}>
            <div className="home-content">
              <img width={280} src={exploreItem.imgSrc} alt={exploreItem.alt} />
              <p className="HomePageDescription">{exploreItem.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
