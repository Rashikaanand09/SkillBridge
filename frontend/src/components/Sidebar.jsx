import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import sidebarIcon from "../assets/sidebar.png";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div>
            {/* Sidebar toggle button */}
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                <img src={sidebarIcon} alt="Sidebar" className="sidebar-icon" />
            </button>

            <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
                <aside className="sidebar">
                    {/* <button className="close-btn" onClick={toggleSidebar}>✖</button> Close button */}
                    <h2>Menu</h2>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default Sidebar;
