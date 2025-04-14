import React, { useState } from "react";
import ProfileModal from "./ProfileModal";
import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";
import "../components/navbar.css";
import sidebarIcon from "../assets/sidebar.png"; // Assuming you have this image

const Navbar = () => {
    const [userName, setUserName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { profileImage, setProfileImage } = useContext(ProfileContext);


    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    {/* Sidebar Toggle Button */}
                    <button className="sidebar-toggle">
                        <img src={sidebarIcon} alt="Sidebar" className="sidebar-icon" />
                    </button>

                    {/* SkillBridge Name */}
                    {/* <span className="website-name">SkillBridge</span> */}
                </div>

                {/* Navbar Links */}
                <ul>
                    <li><a href="/" className="nav-link">Home</a></li>
                    <li><a href="/courses" className="nav-link active">Courses</a></li>
                    <li><a href="/profile" className="nav-link">Profile</a></li>
                </ul>

                {/* Profile Section */}
                <div className="profile-container" onClick={handleImageClick}>
                    <img src={profileImage} alt="Profile" className="profile-pic" />
                </div>
            </nav>

            {/* Hidden file input */}
            <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileUpload}
            />

            {/* Profile Modal */}
            <ProfileModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                profileImage={profileImage}
                onChange={() => document.getElementById("fileInput").click()}
            />
        </>
    );
};

export default Navbar;
