import React from "react";
import { Link } from "react-router-dom";
import "../components/courses.css"; // Import CSS file

const CoursesPage = () => {
  return (
    <div className="courses-container">
      {/* Navbar */}
      <nav className="courses-navbar">
        <div className="navbar-left">
          <h1 className="navbar-logo">SkillBridge</h1>
        </div>
        <div className="navbar-right">
          <Link to="/about" className="navbar-link">About Us</Link>
          <Link to="/login" className="navbar-link">Login</Link>
          <Link to="/signup" className="navbar-link">Signup</Link>
          <Link to="/dashboard" className="navbar-link">Dashboard</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="courses-main">
        <h1 className="courses-heading">Courses</h1>
        <div className="course-list">
          <div className="course-card">
            <h2>ReactJS Basics</h2>
            <p>Learn the fundamentals of ReactJS.</p>
          </div>
          <div className="course-card">
            <h2>Advanced JavaScript</h2>
            <p>Master advanced JavaScript concepts.</p>
          </div>
          <div className="course-card">
            <h2>Data Structures</h2>
            <p>Understand and implement data structures.</p>
          </div>
          <div className="course-card">
            <h2>Python Programming</h2>
            <p>Learn Python from scratch.</p>
          </div>
          <div className="course-card">
            <h2>Machine Learning</h2>
            <p>Discover machine learning concepts.</p>
          </div>
          <div className="course-card">
            <h2>Web Development</h2>
            <p>Build dynamic web applications.</p>
          </div>
          <div className="course-card">
            <h2>Database Management</h2>
            <p>Learn database design and management.</p>
          </div>
          <div className="course-card">
            <h2>Cloud Computing</h2>
            <p>Explore cloud computing fundamentals.</p>
          </div>
          <div className="course-card">
            <h2>Cybersecurity</h2>
            <p>Protect systems from cyber threats.</p>
          </div>
          <div className="course-card">
            <h2>Artificial Intelligence</h2>
            <p>Delve into AI and its applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
