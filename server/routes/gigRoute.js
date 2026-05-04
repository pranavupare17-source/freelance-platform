const express = require("express");
const { createGig, getGig, getGigs } = require("../controllers/gigController");
const { verifyToken } = require("../middleware/jwt");

const router = express.Router();

router.post("/", verifyToken, createGig);
router.get("/single/:id", getGig);
router.get("/", getGigs);

module.exports = router;
