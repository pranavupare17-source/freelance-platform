import React, { useContext, useState } from "react";
import "../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import newRequest from "../utils/newRequest";
import logoDark from "../assets/logo-dark.png";
import { FaGlobe, FaSearch } from "react-icons/fa";

function Navbar() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (searchInput.trim()) {
      navigate(`/gigs?search=${encodeURIComponent(searchInput)}`);
    } else {
      navigate(`/gigs`);
    }
  };

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="nav-left" style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <Link to="/">
              <img src={logoDark} alt="logo" className="logo" style={{ height: '70px' }} />
            </Link>
            
            <div style={{ display: 'flex', border: '1px solid #e4e5e7', borderRadius: '4px', overflow: 'hidden' }}>
              <input 
                type="text" 
                placeholder="What service are you looking for today?" 
                style={{ width: '350px', padding: '10px 15px', border: 'none', outline: 'none' }} 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button 
                onClick={handleSearch}
                style={{ backgroundColor: '#222325', color: 'white', border: 'none', padding: '0 20px', cursor: 'pointer' }}
              >
                <FaSearch />
              </button>
            </div>
          </div>

          <div className="nav-right">
            <span className="nav-item">Lancify Pro ▾</span>
            <span className="nav-item">Explore ▾</span>
            <span className="nav-item globe-item"><FaGlobe className="globe" /> EN</span>

            {currentUser ? (
              <div className="user" style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}>
                <span style={{ fontWeight: 600 }}>{currentUser.username}</span>
                <Link to="/orders" className="nav-item" style={{ fontWeight: 600, color: '#404145' }}>Orders</Link>
                <button onClick={handleLogout} className="join-btn" style={{ padding: '5px 10px' }}>Logout</button>
              </div>
            ) : (
              <>
                <Link to="/become-a-seller" className="nav-item">Become a Seller</Link>
                <Link to="/login" className="nav-item">Sign in</Link>
                <Link to="/register" className="join-btn">Join</Link>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Submenu */}
      <div className="submenu">
        <div className="submenu-container">
          <span className="submenu-item" style={{ color: '#ffb33e', fontWeight: 600 }}>Trending 🔥</span>
          <span className="submenu-item">Graphics & Design</span>
          <span className="submenu-item">Programming & Tech</span>
          <span className="submenu-item">Digital Marketing</span>
          <span className="submenu-item">Video & Animation</span>
          <span className="submenu-item">Writing & Translation</span>
          <span className="submenu-item">Music & Audio</span>
          <span className="submenu-item">Business</span>
          <span className="submenu-item">Finance</span>
          <span className="submenu-item">AI Services</span>
        </div>
      </div>
    </>
  );
}

export default Navbar;