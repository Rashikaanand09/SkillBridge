import React from "react";
import "../components/statsCard.css";

const StatsCard = ({ title, value }) => {
    return (
        <div className="stats-card">
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
};

export default StatsCard;
