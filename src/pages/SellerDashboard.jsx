import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/dashboard.css";
import newRequest from "../utils/newRequest";
import { AuthContext } from "../context/AuthContext";

const SellerDashboard = () => {
  const [gigs, setGigs] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const res = await newRequest.get(`/gigs?userId=${currentUser?._id}`);
        setGigs(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (currentUser?.isSeller) {
      fetchGigs();
    }
  }, [currentUser]);

  if (!currentUser || !currentUser.isSeller) {
    return (
      <div className="dashboard-page">
        <Navbar />
        <div className="dashboard-container" style={{ textAlign: "center", paddingTop: "100px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>Access Restricted</h2>
          <p style={{ color: "#74767e", marginBottom: "30px", fontSize: "16px" }}>Only sellers can view the dashboard. Become a seller to unlock your potential!</p>
          <button className="add-btn" onClick={() => navigate("/become-a-seller")}>Become a Seller</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <Navbar />
      
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Seller Dashboard: My Gigs</h1>
          <Link to="/add" className="add-btn">Add New Gig</Link>
        </div>
        
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Orders</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {gigs.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "40px", color: "#74767e" }}>
                  You haven't listed any gigs yet. Time to start selling!
                </td>
              </tr>
            ) : (
              gigs.map((gig) => (
                <tr key={gig._id}>
                  <td>
                    <img src={gig.cover || `https://picsum.photos/100/50?random=${gig._id}`} alt="gig cover" className="cover-img" />
                  </td>
                  <td style={{ fontWeight: 500, color: "#222325" }}>{gig.title}</td>
                  <td style={{ color: "#1dbf73", fontWeight: 600 }}>₹{gig.price}</td>
                  <td>{gig.sales}</td>
                  <td>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

export default SellerDashboard;
