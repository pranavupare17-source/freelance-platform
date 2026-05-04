import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest";
import "../styles/auth.css";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
    isSeller: false,
    desc: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await newRequest.post("/auth/register", user);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data || "Registration failed!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Create an Account</h1>
        <p className="auth-subtitle">Join Lancify and start unlocking opportunities</p>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <input className="auth-input" name="username" type="text" placeholder="Username" onChange={handleChange} required />
          <input className="auth-input" name="email" type="email" placeholder="Email Address" onChange={handleChange} required />
          <input className="auth-input" name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <input className="auth-input" name="country" type="text" placeholder="Country" onChange={handleChange} required />
          
          <label className="seller-toggle">
            <input type="checkbox" onChange={handleSeller} />
            <span>I want to become a Seller</span>
          </label>

          {user.isSeller && (
             <textarea className="auth-input" name="desc" placeholder="Tell us about your services..." onChange={handleChange} required></textarea>
          )}
          
          <button type="submit" className="auth-btn">Join Now</button>
          {error && <div className="auth-error">{error}</div>}
        </form>
        
        <p className="auth-link-text">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;