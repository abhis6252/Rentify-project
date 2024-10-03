import React, { useState } from "react";
import "./HomePage.css";
import ImageSlider from "../slider/ImageSlider";
import Footer from "../Footer/Footer";
import CarouselComponent from "../homeslider";

// import
const HomePage = () => {
  const [explore, setExplore] = useState(false);

  const handleExplore = () => {
    setExplore(!explore);
  };
  return (
    <>
      <div className="homepage">
        <ImageSlider />

        <header className="homepage-header">
          <h1>Welcome to Rentify</h1>
          <p>Your go-to platform for renting stylish and trendy clothes</p>
          <button className="explore-btn" onClick={handleExplore}>
            Explore Our Collection
          </button>

          <div className="" style={{ display: explore ? "block" : "none" }}>
            <CarouselComponent />
          </div>
          <div></div>
        </header>
      </div>
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
};

export default HomePage;
