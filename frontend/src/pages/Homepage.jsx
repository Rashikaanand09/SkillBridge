import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/homepage.css"; // Import the CSS file

const Homepage = () => {


  return (
    <div
      className="homepage"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >


      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="navbar-logo">SkillBridge</h1>
        </div>
        <div className="navbar-right">
          <Link to="/about" className="navbar-link">
            About Us
          </Link>
          <Link to="/login" className="navbar-link">
            Login
          </Link>
          <Link to="/signup" className="navbar-link">
            Signup
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-container">
          <div className="hero-section">
            <h1>Welcome to SkillBridge!</h1>
            <br />
            <h2>"Your Gateway to Modern Learning"</h2>
            <p>Your one-stop platform for amazing courses.</p>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link to="/signup" className="cta-button">
                Get Started
              </Link>
              <Link to="/learnmore" className="learn-more-button">
                Learn More
              </Link>
            </div>
          </div>

          <div className="triangle-container">
            <div className="circle-background"></div>
            <div className="box box1">
              <img src="../../assets/image1.jpg" alt="Box 1" />
            </div>
            <div className="box box2">
              <img src="../../assets/image2.jpg" alt="Box 2" />
            </div>
            <div className="box box3">
              <img src="../../assets/image3.jpg" alt="Box 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
