import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column">
            <h2>Categories</h2>
            <a href="#">Graphics & Design</a>
            <a href="#">Digital Marketing</a>
            <a href="#">Writing & Translation</a>
            <a href="#">Video & Animation</a>
            <a href="#">Music & Audio</a>
            <a href="#">Programming & Tech</a>
          </div>
          <div className="footer-column">
            <h2>About</h2>
            <a href="#">Careers</a>
            <a href="#">Press & News</a>
            <a href="#">Partnerships</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className="footer-column">
            <h2>Support</h2>
            <a href="#">Help & Support</a>
            <a href="#">Trust & Safety</a>
            <a href="#">Selling on Lancify</a>
            <a href="#">Buying on Lancify</a>
          </div>
          <div className="footer-column">
            <h2>Community</h2>
            <a href="#">Customer Success Stories</a>
            <a href="#">Community Hub</a>
            <a href="#">Forum</a>
            <a href="#">Events</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-logo">
            Lancify <span>© Lancify International Ltd. 2026</span>
          </div>
          <div className="footer-socials">
            <span>in</span>
            <span>tw</span>
            <span>fb</span>
            <span>ig</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
