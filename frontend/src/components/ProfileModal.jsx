import React, { useState } from "react";
import "./profileModal.css";

const ProfileModal = ({ isOpen, onClose, profileImage, onChange }) => {
    const [viewImage, setViewImage] = useState(false);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {/* Close Button */}
                <button className="close-btn" onClick={() =>
                { setViewImage(false); onClose(); }}>✖</button>

                {viewImage ? (
                    <>
                        <img src={profileImage} alt="Profile" className="modal-image" />
                    </>
                ) : (
                    <>
                        <h2>Profile Options</h2>
                        <div className="modal-buttons">
                            <button className="view-btn" onClick={() => setViewImage(true)}>👀 View Image</button>
                            <button className="change-btn" onClick={onChange}>✏ Change Image</button>
                            <button className="close-modal-btn" onClick={onClose}>❌ Close</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProfileModal;
