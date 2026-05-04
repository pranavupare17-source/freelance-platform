import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/orders.css";
import newRequest from "../utils/newRequest";
import { AuthContext } from "../context/AuthContext";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await newRequest.get("/orders");
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (currentUser) {
      fetchOrders();
    }
  }, [currentUser]);

  if (!currentUser) {
    return (
      <div className="orders-page">
        <Navbar />
        <div className="orders-container">
          <div className="empty-orders">
            <h2>You need to be logged in</h2>
            <p>Please log in to view and manage your orders.</p>
            <button className="msg-btn" onClick={() => navigate("/login")}>Go to Login</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="orders-page">
      <Navbar />
      
      <div className="orders-container">
        <div className="orders-header">
          <h1>{currentUser.isSeller ? "Active Orders" : "My Orders"}</h1>
        </div>

        {orders.length === 0 ? (
          <div className="empty-orders">
            <h2>No active orders yet</h2>
            <p>Ready to get started? Explore the marketplace or list your first service.</p>
            <button className="msg-btn" onClick={() => navigate(currentUser.isSeller ? "/add" : "/")}>
              {currentUser.isSeller ? "Create a Gig" : "Explore Services"}
            </button>
          </div>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="order-img-cell">
                    <img src={order.img || "https://picsum.photos/100/50?random=" + order._id} alt="Order cover" />
                  </td>
                  <td className="order-title">{order.title}</td>
                  <td className="order-price">₹{order.price}</td>
                  <td>
                    <button className="msg-btn">Message {currentUser.isSeller ? "Buyer" : "Seller"}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Orders;
