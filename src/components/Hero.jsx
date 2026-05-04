import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/hero.css";
import heroVideo from "../assets/hero-video.mp4";
import vitLogo from "../assets/vit.png";

function Hero() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleSearch = () => {
    navigate(`/gigs?search=${encodeURIComponent(input)}`);
  };
  return (
    <div className="hero">

      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      
      <div className="hero-content">

        <h1>
          Our freelancers <br /> will take it from here
        </h1>

        
        <div className="search-container">

          <input
            type="text"
            placeholder="Search for any service..."
            className="search-input"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          <button className="search-btn" onClick={handleSearch}>
            <FaSearch />
          </button>

        </div>

       
        <div className="categories">
          <span style={{ cursor: "pointer" }} onClick={() => navigate("/gigs?cat=Website%20Development")}>Website Development →</span>
          <span style={{ cursor: "pointer" }} onClick={() => navigate("/gigs?cat=Architecture%20%26%20Interior%20Design")}>Architecture & Interior Design →</span>
          <span style={{ cursor: "pointer" }} onClick={() => navigate("/gigs?cat=UGC%20Videos")}>UGC Videos →</span>
          <span style={{ cursor: "pointer" }} onClick={() => navigate("/gigs?cat=Video%20Editing")}>Video Editing →</span>
          <span style={{ cursor: "pointer" }} onClick={() => navigate("/gigs?cat=Book%20Publishing")}>Book Publishing →</span>
        </div>

        
        <div className="trusted">

          <p>Trusted by:</p>

          <img src={vitLogo} alt="vit" className="vit-logo"/>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
          />

        </div>

      </div>

    </div>
  );
}

export default Hero;