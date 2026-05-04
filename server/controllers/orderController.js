const Order = require("../models/Order");
const Gig = require("../models/Gig");

const createOrder = async (req, res) => {
  try {
    let gig;
    if (req.params.gigId.startsWith("m")) {
      gig = {
        _id: req.params.gigId,
        cover: req.body.cover || "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        title: req.body.title || "Mock Front-End Gig",
        userId: req.body.sellerId || "mock_seller_id",
        price: req.body.price || 1500
      };
    } else {
      gig = await Gig.findById(req.params.gigId);
    }

    if (!gig) {
        return res.status(404).send("Gig not found");
    }

    const newOrder = new Order({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent: "temporary_intent_id_" + Date.now(), // Simulated payment
    });

    await newOrder.save();
    res.status(200).send("Order has been created.");
  } catch (err) {
    res.status(500).send("Order creation failed: " + err.message);
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
    });

    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send("Fetching orders failed: " + err.message);
  }
};

module.exports = { createOrder, getOrders };
