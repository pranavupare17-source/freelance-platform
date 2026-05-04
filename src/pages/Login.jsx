import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest";
import { AuthContext } from "../context/AuthContext";
import "../styles/auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { email, password });
      updateUser(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data || "Something went wrong!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p className="auth-subtitle">Sign in to your Lancify account</p>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <input 
            className="auth-input"
            type="email" 
            placeholder="Email Address" 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            className="auth-input"
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit" className="auth-btn">Sign In</button>
          {error && <div className="auth-error">{error}</div>}
        </form>
        
        <p className="auth-link-text">
          Don't have an account? <Link to="/register">Join Lancify</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;