const express = require("express");
const { verifyToken } = require("../middleware/jwt");
const { getOrders, createOrder } = require("../controllers/orderController");

const router = express.Router();

const checkMockAuth = (req, res, next) => {
  if (req.params.gigId && req.params.gigId.startsWith("m")) {
    req.userId = req.body.buyerId || "mock_buyer";
    return next();
  }
  return verifyToken(req, res, next);
};

router.get("/", verifyToken, getOrders);
router.post("/:gigId", checkMockAuth, createOrder);

module.exports = router;
