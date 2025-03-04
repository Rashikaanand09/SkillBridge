import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h2>Menu</h2>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </aside>
    );
};

export default Sidebar;
