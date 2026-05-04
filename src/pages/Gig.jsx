import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/gig.css";
import newRequest from "../utils/newRequest";
import { MOCK_GIGS } from "../utils/mockGigs";

const Gig = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [gig, setGig] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGig = async () => {
      try {
        const res = await newRequest.get(`/gigs/single/${id}`);
        setGig(res.data ? res.data : MOCK_GIGS.find(g => g._id === id));
      } catch (err) {
        console.log(err);
        setGig(MOCK_GIGS.find(g => g._id === id) || MOCK_GIGS[0]);
      } finally {
        setLoading(false);
      }
    };
    fetchGig();
  }, [id]);

  const handleOrder = () => {
    navigate(`/pay/${id}`);
  };

  if (loading) return <div style={{ padding: "50px", textAlign: "center" }}>Loading your gig...</div>;
  if (!gig) return <div style={{ padding: "50px", textAlign: "center" }}>Gig not found!</div>;

  return (
    <div className="gig-page">
      <Navbar />
      
      <div className="gig-container">
        <div className="gig-left">
          <div className="gig-breadcrumbs">
            Lancify &gt; {gig.cat}
          </div>
          
          <h1>{gig.title}</h1>
          
          <div className="gig-seller-mini">
            <img src={gig.sellerImg || (gig.sellerName ? `https://ui-avatars.com/api/?name=${encodeURIComponent(gig.sellerName)}&background=random` : "https://i.pravatar.cc/150?u=a042581f4e29026704d")} alt="seller avatar" />
            <span>{gig.sellerName || "Top Seller"}</span>
            <div className="stars">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <path d="M7 1L9 5L13.5 5.5L10 8.5L11 13L7 11L3 13L4 8.5L0.5 5.5L5 5L7 1Z" />
              </svg>
              5.0 (1k+ reviews)
            </div>
          </div>
          
          <div className="gig-slider">
            <img src={gig.cover} alt="gig cover" />
          </div>
          
          <div className="gig-about">
            <h2>About This Gig</h2>
            <p>{gig.desc}</p>
          </div>
        </div>
        
        <div className="gig-right">
          <div className="gig-package">
            <div className="package-header">
              <h3>{gig.shortTitle || "Standard Package"}</h3>
              <h2>₹{gig.price}</h2>
            </div>
            
            <p className="package-desc">
              {gig.shortDesc || "Receive a highly professional, top-tier service tailored to your absolute requirements."}
            </p>
            
            <div className="package-features">
              <span><b>⏱</b> {gig.deliveryTime || 3} Days Delivery</span>
              <span><b>🔄</b> {gig.revisionNumber || 2} Revisions</span>
            </div>
            
            <button className="package-btn" onClick={handleOrder}>
              Continue to Order (₹{gig.price})
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gig;