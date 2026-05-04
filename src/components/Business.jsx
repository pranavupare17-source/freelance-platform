import React from "react";
import "../styles/business.css";

const Business = () => {
  return (
    <div className="pro-section">
      <div className="pro-banner">
        <div className="pro-left">
          <div className="pro-logo">
            <strong>Lancify</strong> pro.
          </div>
          <h2>Let experts find the right<br/>freelancer for you</h2>
          <ul>
            <li><span>•</span> Work with experts who will source, interview, and vet freelancers for you</li>
            <li><span>•</span> Get a report with clear recommendations</li>
            <li><span>•</span> Hire vetted freelance talent with confidence</li>
          </ul>
          <button className="pro-btn">Discover expert sourcing</button>
          
          <div className="pro-guarantee">
            <span className="shield">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
            </span>
            100% money-back guarantee
          </div>
        </div>

        <div className="pro-right">
          <div className="cards-cluster">
            <div className="pro-card card-left">
              <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400" alt="freelancer" />
            </div>
            
            <div className="pro-card card-right">
              <img src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400" alt="freelancer" />
            </div>
            
            <div className="bubble">...</div>
            
            <div className="pro-card card-center">
              <img src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Lillian" />
              
              <div className="gradient-overlay"></div>
              
              <div className="card-info">
                <img src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=100" className="mini-avatar" alt="Lillian" />
                <div className="info-text">
                  <strong>Lillian</strong>
                  <span>Website developer</span>
                </div>
              </div>
              
              <div className="cursor-pointer">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{filter: "drop-shadow(2px 5px 6px rgba(0,0,0,0.3))"}}>
                  <path d="M6 3L17 11.5L11 13.5L9 21L6 3Z" fill="url(#cursorGrad)" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="cursorGrad" x1="6" y1="3" x2="17" y2="21" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#31d582"/>
                      <stop offset="1" stopColor="#0c874c"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
