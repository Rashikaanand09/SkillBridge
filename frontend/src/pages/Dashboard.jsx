import React, { useContext } from "react";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { ProfileContext } from "../components/ProfileContext";
import "../components/dashboard.css";

const Dashboard = () => {
    const userName = localStorage.getItem("userName"); // Replace with dynamic user data
    const { profileImage } = useContext(ProfileContext);

    return (
        <div className="dashboard-container">
            <Navbar />
            <div className="dashboard-content">
                <Sidebar />
                <div className="main-content">
                    {/* Profile Section */}
                    <div className="profile-section">
                        <img src={profileImage} alt="Profile" className="profile-pic" />
                        <h2 className="user-name">Welcome!</h2>
                    </div>

                    {/* Statistics Cards */}
                    <div className="stat-cards">
                        <div className="card">Total Courses: 8</div>
                        <div className="card">Completed: 5</div>
                        <div className="card">In Progress: 3</div>
                    </div>

                    {/* Enrolled Courses */}
                    <div className="courses-section">
                        <h3>Enrolled Courses</h3>
                        <div className="course-list">
                            <div className="course-card">ReactJS Basics</div>
                            <div className="course-card">Advanced JavaScript</div>
                            <div className="course-card">Data Structures</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
