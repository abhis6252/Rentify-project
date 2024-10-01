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

        {/* <section className="features">
          <div className="feature">
            <h2>Trendy Fashion</h2>
            <p>Discover the latest styles and trends for every occasion!</p>
          </div>
          <div className="feature">
            <h2>Affordable Rentals</h2>
            <p>Rent high-quality clothing without breaking the bank.</p>
          </div>
          <div className="feature">
            <h2>Sustainable Choices</h2>
            <p>Make eco-friendly fashion choices with our shared wardrobe.</p>
          </div>
        </section> */}
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
