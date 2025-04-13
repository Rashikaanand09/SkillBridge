import React from "react";
import "../components/courseCard.css"; // Course-specific styles

const CourseCard = ({ title, description, instructor, duration, startDate, rating, imageUrl, progress }) => {
    return (
        <div className="course-card">
            <img src={imageUrl} alt={title} className="course-image" />
            <div className="course-info">
                <h3>{title}</h3>
                <p className="course-description">{description}</p>
                <p className="course-instructor">Instructor: {instructor}</p>
                <p className="course-duration">Duration: {duration}</p>
                <p className="course-start-date">Start Date: {startDate}</p>
                <div className="course-rating">
                    Rating: {rating} <span className="star-rating">⭐</span>
                </div>
                <p className="course-progress">Progress: {progress}</p>
                <button className="continue-btn">Continue</button>
            </div>
        </div>
    );
};

export default CourseCard;
