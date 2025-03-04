import React, { useState } from "react";
import ProfileModal from "./ProfileModal";
import "../components/navbar.css";

const Navbar = () => {
    const loggedInUser = "Riya Mangar"; // Replace with dynamic user data
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profileImage, setProfileImage] = useState("/profile.png");

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleViewImage = () => {
        alert("Viewing Image"); // This will be replaced by a modal
    };

    const handleChangeImage = () => {
        document.getElementById("fileInput").click();
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
                <h1>EduTech Platform</h1>
                <ul>
                    <li><a href="/" className="nav-link">Home</a></li>
                    <li><a href="/courses" className="nav-link active">Courses</a></li>
                    <li><a href="/profile" className="nav-link">Profile</a></li>
                </ul>

                {/* Profile Section */}
                <div className="profile-container" onClick={handleImageClick}>
                    <img src={profileImage} alt="Profile" className="profile-pic" />
                    <span className="username">{loggedInUser}</span>
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
                onView={handleViewImage}
                onChange={handleChangeImage}
            />
        </>
    );
};

export default Navbar;
