import React from "react";
import { Link } from "react-router-dom";
import "../styles/GigCard.css";

const GigCard = ({ _id, title, cover, sellerName, sellerImg, sellerLevel, rating, reviewCount, price }) => {
  return (
    <Link to={`/gig/${_id}`} className="gig-link">
      <div className="gig-card">
        <img src={cover} alt={title} className="gig-img" />
        <span className="heart">♡</span>

        <div className="gig-info">
          <div className="seller">
            <img
              src={sellerImg || (sellerName ? `https://ui-avatars.com/api/?name=${encodeURIComponent(sellerName)}&background=random` : "https://i.pravatar.cc/150?u=default")}
              alt="seller"
              className="seller-img"
            />
            <div className="seller-details">
              <span>{sellerName || "Pro Seller"}</span>
              {sellerLevel && <span className="seller-level">{sellerLevel}</span>}
            </div>
          </div>

          <p className="gig-title">{title}</p>

          <div className="gig-rating">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M7 1L9 5L13.5 5.5L10 8.5L11 13L7 11L3 13L4 8.5L0.5 5.5L5 5L7 1Z" />
            </svg>
            {rating || 5.0} <span>({reviewCount || "1k+"})</span>
          </div>

          <div className="gig-footer">
            <span className="gig-footer-text">STARTING AT</span>
            <span className="gig-price">₹{price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;