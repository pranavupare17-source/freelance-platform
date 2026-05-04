import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/become-seller.css';

const BecomeSeller = () => {
  return (
    <div className="seller-landing">
      <Navbar />
      
      <section className="seller-hero">
        <div className="hero-capsule">Freelance Community</div>
        <h1>Work Your Way. <br/> Earn On Your Terms.</h1>
        <p>Join millions of businesses and independent professionals doing great work together. Set your own hours and build your unique brand.</p>
        <Link to="/register" className="primary-cta">Start Earning Today</Link>
      </section>

      <section className="features-section">
        <h2>Why Join Lancify?</h2>
        <div className="features-grid">
          
          <div className="feature-card">
            <span className="feature-icon">💸</span>
            <h3>Secure Payments</h3>
            <p>Get paid on time, every time. Payment is transferred to you upon completion of an order, guaranteeing your earnings remain secure.</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🌍</span>
            <h3>Global Audience</h3>
            <p>Access an ever-growing pool of high-quality clients from around the globe who are actively seeking the services you provide.</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🚀</span>
            <h3>Complete Freedom</h3>
            <p>You’re the boss. Choose your own rates, create flexible packages, and decide exactly how, when, and where you want to work.</p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default BecomeSeller;
