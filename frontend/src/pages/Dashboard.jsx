import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { ProfileContext } from "../components/ProfileContext";
import CourseCard from "../components/CourseCard";
import { fetchVideos } from "./youtubeApi.jsx";
import "../components/dashboard.css";

const Dashboard = () => {
    const userName = localStorage.getItem("userName");
    const { profileImage, setProfileImage } = useContext(ProfileContext);

    const [isOpen, setIsOpen] = useState(false);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);  // Loading state to manage video fetching

    const navigate = useNavigate();  // For navigation

    // Enrolled Courses Data
    const enrolledCourses = [
        { title: "ReactJS Basics", progress: "70%" },
        { title: "Advanced JavaScript", progress: "50%" },
        { title: "Data Structures", progress: "80%" },
    ];

    useEffect(() => {
        const fetchCourseVideos = async () => {
            try {
                const courseVideos = await Promise.all(
                    enrolledCourses.map(async (course) => {
                        const videos = await fetchVideos(course.title);
                        return { course: course.title, videos };
                    })
                );
                setVideos(courseVideos);
            } catch (error) {
                console.error("Error fetching videos:", error);
            } finally {
                setLoading(false); // Stop loading after fetching
            }
        };

        fetchCourseVideos();
    }, []); // Empty dependency array ensures it runs once

    // Statistics Data (mock data)
    const totalCourses = enrolledCourses.length;
    const completedCourses = enrolledCourses.filter(course => course.progress === "100%").length;
    const inProgressCourses = enrolledCourses.filter(course => course.progress !== "100%").length;

    useEffect(() => {
        const storedImage = localStorage.getItem("profileImage");
        if (storedImage) {
            setProfileImage(storedImage);
        }
    }, [setProfileImage]);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const handleProfileImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Image = reader.result;
                setProfileImage(base64Image);
                localStorage.setItem("profileImage", base64Image);
            };
            reader.readAsDataURL(file); // Convert image to base64
        }
    };

    const goToCourseVideoPage = (courseTitle) => {
        navigate(`/course-video/${courseTitle}`);
    };

    return (
        <div className="dashboard-container">
            <Navbar />
            <div className="dashboard-content">
                <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

                <div className={`main-content ${isOpen ? "shifted" : ""}`}>
                    {/* Profile Section */}
                    <div className="profile-section">
                        <label htmlFor="profile-upload">
                            <img
                                src={profileImage || "/path/to/default/profile-image.jpg"}
                                alt="Profile"
                                className="profile-pic"
                                style={{ cursor: "pointer" }}
                            />
                        </label>
                        <input
                            id="profile-upload"
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={handleProfileImageChange}
                        />
                        <h2 className="user-name">
                            {userName ? `Welcome, ${userName}` : "Welcome!"}
                        </h2>
                    </div>

                    {/* Statistics Cards */}
                    <div className="stat-cards">
                        <div className="card">Total Courses: {totalCourses}</div>
                        <div className="card">Completed: {completedCourses}</div>
                        <div className="card">In Progress: {inProgressCourses}</div>
                    </div>

                    {/* Videos Section */}
                    <div className="video-section">
                        {loading ? (
                            <p>Loading videos...</p>
                        ) : (
                            videos.map((courseVideos) => (
                                <div key={courseVideos.course} className="video-group">
                                    <h3>
                                        {courseVideos.course}
                                        <button onClick={() => goToCourseVideoPage(courseVideos.course)}>
                                            View All Videos
                                        </button>
                                    </h3>
                                    <div className="video-list">
                                        {courseVideos.videos.slice(0, 5).map((video) => (
                                            <div key={video.id.videoId} className="video-item">
                                                <a
                                                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img
                                                        src={video.snippet.thumbnails.medium.url}
                                                        alt={video.snippet.title}
                                                        className="video-thumbnail"
                                                    />
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
