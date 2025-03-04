import React from "react";
import "../components/courseCard.css"; // Course-specific styles

const CourseCard = ({ title, progress }) => {
    return (
        <div className="course-card">
            <h3>{title}</h3>
            <p>Progress: {progress}</p>
            <button className="continue-btn">Continue</button>
        </div>
    );
};

export default CourseCard;
