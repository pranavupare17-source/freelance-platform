import React, { useState } from "react";
import "../styles/howItWorks.css";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("hiring"); 

  const hiringCards = [
    {
      type: "video-mockup",
      content: (
        <div className="card-video-mockup">
          <span className="highlight-text">
            all in <span className="green-glow" style={{color: 'white'}}>one</span> place
          </span>
          <div className="pause-btn">||</div>
        </div>
      ),
      text: "Posting jobs is always free",
    },
    {
      type: "image",
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Get proposals and hire",
    },
    {
      type: "image",
      src: "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Pay when work is done",
    },
  ];

  const findingCards = [
    {
      type: "video-mockup",
      content: (
        <div className="card-video-mockup" style={{ fontSize: "28px" }}>
          <div>
            How to find <span style={{ color: "#9ca3af" }}>great</span>
            <br />
            <span style={{ color: "#9ca3af" }}>clients</span>
          </div>
          <div className="pause-btn">||</div>
        </div>
      ),
      text: "Find clients and remote jobs",
    },
    {
      type: "image",
      src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Submit proposals for work",
    },
    {
      type: "image",
      src: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Get paid as you deliver work",
    },
  ];

  const currentCards = activeTab === "hiring" ? hiringCards : findingCards;

  return (
    <div className="how-it-works-section">
      <div className="how-it-works-header">
        <h2>How it works</h2>
        <div className="hw-toggle-container">
          <button
            className={`hw-toggle-btn ${activeTab === "hiring" ? "active" : ""}`}
            onClick={() => setActiveTab("hiring")}
          >
            For hiring
          </button>
          <button
            className={`hw-toggle-btn ${activeTab === "finding" ? "active" : ""}`}
            onClick={() => setActiveTab("finding")}
          >
            For finding work
          </button>
        </div>
      </div>

      <div className="hw-cards-grid">
        {currentCards.map((card, idx) => (
          <div className="hw-card" key={idx}>
            <div className="hw-card-media">
              {card.type === "image" ? (
                <img src={card.src} alt={card.text} />
              ) : (
                card.content
              )}
            </div>
            <div className="hw-card-text">{card.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
