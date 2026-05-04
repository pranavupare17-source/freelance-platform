const express = require("express");
const { getUser } = require("../controllers/userController");
const { verifyToken } = require("../middleware/jwt");

const router = express.Router();

router.get("/:id", getUser);

module.exports = router;
