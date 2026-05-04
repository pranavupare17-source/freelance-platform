import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/pay.css";
import { MOCK_GIGS } from "../utils/mockGigs";
import { AuthContext } from "../context/AuthContext";

const Pay = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [gig, setGig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  useEffect(() => {
    const fetchGig = async () => {
      try {
        const res = await newRequest.get(`/gigs/single/${id}`);
        setGig(res.data ? res.data : MOCK_GIGS.find(g => g._id === id));
      } catch (err) {
        console.log(err);
        setGig(MOCK_GIGS.find(g => g._id === id));
      } finally {
        setLoading(false);
      }
    };
    fetchGig();
  }, [id]);

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!name || !cardNumber || !expiry || !cvv) return;

    setIsProcessing(true);
    try {
      await newRequest.post(`/orders/${id}`, {
        title: gig.title,
        cover: gig.cover,
        price: gig.price,
        sellerId: gig.userId || "mock_seller",
        buyerId: currentUser ? currentUser._id : "mock_buyer"
      });
      // Fallback to native redirect to resolve view not updating issue
      window.location.href = "/orders";
    } catch (err) {
      console.log(err);
      setIsProcessing(false);
    }
  };

  if (loading) return <div style={{ padding: "50px", textAlign: "center" }}>Loading secure checkout...</div>;
  if (!gig) return <div style={{ padding: "50px", textAlign: "center" }}>Gig not found!</div>;

  return (
    <div className="pay-page">
      <Navbar />
      
      <div className="pay-container">
        <div className="pay-wrapper">
          
          <div className="pay-left">
            <h2>Payment Details</h2>
            <form className="payment-form" onSubmit={handlePayment}>
              
              <div className="form-group">
                <label>Name on Card</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="cc-name"
                />
              </div>

              <div className="form-group">
                <label>Card Number</label>
                <input 
                  type="text" 
                  placeholder="0000 0000 0000 0000" 
                  maxLength="19"
                  required 
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  autoComplete="cc-number"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Expiration Date</label>
                  <input 
                    type="text" 
                    placeholder="MM/YY" 
                    maxLength="5"
                    required 
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    autoComplete="cc-exp"
                  />
                </div>
                <div className="form-group">
                  <label>Security Code (CVV)</label>
                  <input 
                    type="password" 
                    placeholder="123" 
                    maxLength="4"
                    required 
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    autoComplete="cc-csc"
                  />
                </div>
              </div>

              <button type="submit" className="pay-btn" disabled={isProcessing}>
                {isProcessing ? "Processing..." : "Confirm & Pay"}
              </button>
            </form>
          </div>

          <div className="pay-right">
            <div className="order-summary">
              <h3>Order Summary</h3>
              <img src={gig.cover} alt="gig feature" className="summary-img" />
              <div style={{fontWeight: 500, color: "#222325", lineHeight: 1.4}}>
                {gig.title}
              </div>
              
              <div style={{marginTop: "20px"}}>
                <div className="summary-item">
                  <span>Service Fee</span>
                  <span>₹{Math.round(gig.price * 0.05)}</span>
                </div>
                <div className="summary-item" style={{marginTop: "10px"}}>
                  <span>Subtotal</span>
                  <span>₹{gig.price}</span>
                </div>
              </div>

              <div className="summary-total">
                <span>Total</span>
                <span>₹{gig.price + Math.round(gig.price * 0.05)}</span>
              </div>
              <div style={{fontSize: "12px", color: "#95979d", textAlign: "center", marginTop: "10px"}}>
                SSL Secure Encrypted Checkout
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pay;
