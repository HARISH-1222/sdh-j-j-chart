// src/components/Card.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import ChartOverview from "./ChartOverview"; // Small chart for each card
import "./card.css";

const Card = ({ id, title, subtitle }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/chart/${id}`);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <h3 className="card-title">{title}</h3>
      <div className="card-body">
        <h4 className="card-subtitle">{subtitle}</h4>
        <ChartOverview id={id} />
      </div>
    </div>
  );
};

export default Card;
