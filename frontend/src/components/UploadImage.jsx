import { useState } from "react";
import "./uploadImage.css"; // Import CSS

const UploadImage = ({ defaultImage = "/profile.png", size = 100 }) => {
    const [image, setImage] = useState(defaultImage); // Default profile pic

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file)); // Preview uploaded image
        }
    };

    return (
        <div className="upload-container">
            {/* Clickable Profile Image */}
            <label htmlFor="fileInput">
                <img
                    src={image}
                    // alt="Profile"
                    className="profile-circle"
                    style={{ width: `${size}px`, height: `${size}px` }} // Dynamic size
                />
            </label>

            {/* Hidden File Input */}
            <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
            />
        </div>
    );
};

export default UploadImage;
