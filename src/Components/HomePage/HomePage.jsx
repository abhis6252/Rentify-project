import React from "react";
import "./HomePage.css";
import ImageSlider from "../slider/ImageSlider";

const HomePage = () => {
  return (
    <div className="homepage">
      <ImageSlider />
      <header className="homepage-header">
        <h1>Welcome to Rentify</h1>
        <p>Your one-stop shop for all rental needs</p>
        <button className="explore-btn">Explore Now</button>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Wide Range of Products</h2>
          <p>From electronics to furniture, we have it all!</p>
        </div>
        <div className="feature">
          <h2>Easy Checkout</h2>
          <p>Fast and secure payment options.</p>
        </div>
        <div className="feature">
          <h2>Customer Support</h2>
          <p>We're here to help you 24/7.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
