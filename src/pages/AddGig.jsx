import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/dashboard.css";
import newRequest from "../utils/newRequest";

const AddGig = () => {
  const [gig, setGig] = useState({
    title: "",
    cat: "",
    price: 0,
    cover: "https://picsum.photos/300/200?9",
    shortTitle: "",
    shortDesc: "",
    deliveryTime: 0,
    revisionNumber: 0,
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setGig((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await newRequest.post("/gigs", gig);
      navigate("/gigs");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard-page">
      <Navbar />
      
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Add New Gig</h1>
        </div>
        
        <form className="add-gig-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <div className="form-group">
              <label>Gig Title</label>
              <input className="form-input" name="title" type="text" placeholder="I will do something I'm really good at" onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label>Category</label>
              <input className="form-input" name="cat" type="text" placeholder="e.g. Website Development" onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label>Base Price (₹)</label>
              <input className="form-input" name="price" type="number" placeholder="100" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Full Description</label>
              <textarea className="form-input form-textarea" name="desc" placeholder="Offer details, what's included, etc." onChange={handleChange} required></textarea>
            </div>
          </div>

          <div className="form-section">
            <div className="form-group">
              <label>Service Short Title</label>
              <input className="form-input" name="shortTitle" type="text" placeholder="e.g. One-page Web Design" onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label>High-level Delivery Description</label>
              <input className="form-input" name="shortDesc" type="text" placeholder="Short summary of service..." onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label>Delivery Time (in days)</label>
              <input className="form-input" name="deliveryTime" type="number" placeholder="3" min="1" onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label>Revision Number</label>
              <input className="form-input" name="revisionNumber" type="number" placeholder="2" min="0" onChange={handleChange} required />
            </div>
          </div>
          
          <button className="submit-btn" type="submit">Create New Gig</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default AddGig;
