const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");

// Route: POST /api/auth/register - Register new user
router.post("/register", registerUser);

// Route: POST /api/auth/login - Login user
router.post("/login", loginUser);

module.exports = router;
