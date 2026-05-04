import React from "react";
import { Link } from "react-router-dom";
import "../styles/ServiceCard.css";

const ServiceCard = ({ title, image, id }) => {
  return (
    <Link to={`/gig/${id}`} className="card-link">
      <div className="service-card">
        <img src={image} alt={title} />
        <div className="overlay">
          <span>Explore</span>
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;