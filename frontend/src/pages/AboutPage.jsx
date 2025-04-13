import React from "react";
import "../components/about.css";  // Import CSS file

const AboutPage = () => {
  return (
    <div className="cont">
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our platform! We aim to provide a seamless experience for our users by offering innovative solutions and services.
      </p>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower individuals and businesses by providing them with the tools and resources they need to succeed in today's fast-paced world.
        </p>
      </section>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>
          Our vision is to become a leading platform in our industry, known for our commitment to excellence and customer satisfaction.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>
          If you have any questions or would like to learn more about our platform, please don't hesitate to contact us.
        </p>
        <a href="mailto:info@example.com">info@example.com</a>
      </section>
    </div>
    </div>
  );
};

export default AboutPage;
