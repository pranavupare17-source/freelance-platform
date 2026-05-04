import React from "react";
import { Link } from "react-router-dom";
import "../styles/popular.css";
import { 
  FiCpu, 
  FiCode, 
  FiPenTool, 
  FiTrendingUp, 
  FiEdit3, 
  FiUserCheck, 
  FiBriefcase, 
  FiShield, 
  FiUsers, 
  FiTool 
} from "react-icons/fi";

function PopularServices() {
  const categories = [
    { title: "AI Services", icon: <FiCpu /> },
    { title: "Development & IT", icon: <FiCode /> },
    { title: "Design & Creative", icon: <FiPenTool /> },
    { title: "Sales & Marketing", icon: <FiTrendingUp /> },
    { title: "Writing & Translation", icon: <FiEdit3 /> },
    { title: "Admin & Support", icon: <FiUserCheck /> },
    { title: "Finance & Accounting", icon: <FiBriefcase /> },
    { title: "Legal", icon: <FiShield /> },
    { title: "HR & Training", icon: <FiUsers /> },
    { title: "Engineering & Architecture", icon: <FiTool /> }
  ];

  return (
    <div className="popular-categories">
      <div className="popular-container">
        <h2>Find freelancers for every type of work</h2>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <Link to={`/gigs?cat=${encodeURIComponent(cat.title)}`} className="category-card" key={index}>
              <div className="category-icon">{cat.icon}</div>
              <div className="category-title">{cat.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularServices;