import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/contact");
  };
  return (
    <div className="about-container">
      <div className="about-banner">
        <h1>About Rentify</h1>
        <p>Your go-to platform for renting stylish and trendy clothes.</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Rentify, our mission is to make fashion accessible for everyone.
            We provide a platform where you can rent high-quality clothing for
            any occasion, without the commitment of buying. We believe in
            sustainable fashion and reducing waste through shared wardrobes.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul className="about-list">
            <li>Wide range of trendy outfits for every event</li>
            <li>Affordable rental prices</li>
            <li>Hassle-free delivery and returns</li>
            <li>Sustainable and eco-friendly fashion choice</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Our Values</h2>
          <p>
            We believe in providing quality service while promoting sustainable
            and eco-friendly fashion. Every piece of clothing you rent from us
            is cleaned and sanitized with the highest standards. We aim to
            reduce waste and encourage reusing clothing items instead of fast
            fashion purchases.
          </p>
        </section>
      </div>

      <div className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            {/* <img src="/path/to/image1.jpg" alt="Team Member 1" /> */}
            <h4>Amit Dobhal</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            {/* <img src="/path/to/image2.jpg" alt="Team Member 2" /> */}
            <h4>Abhishek Sharma</h4>
            <p>Chief Fashion Officer</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>

      <div className="about-contact">
        <h2>Get in Touch</h2>
        Have questions? Reach out to us at{" "}
        <div href="mailto:info@rentify.com" id="aboutContactLink" className="">
          info@rentify.com
        </div>{" "}
        {/* click krne pr contact page per jayega isse */}
        or visit our{" "}
        <div onClick={handleNavigate} id="aboutContactLink">
          Contact Us
        </div>{" "}
        page.
      </div>
    </div>
  );
};

export default About;
