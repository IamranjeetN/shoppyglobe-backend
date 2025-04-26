const express = require("express");
const router = express.Router();
const {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem
} = require("../controllers/cartController");
const { protect } = require("../middleware/authMiddleware");

// Secure all routes with the `protect` middleware
router.get("/", protect, getCart);                      // GET /api/cart
router.post("/", protect, addToCart);                   // POST /api/cart
router.put("/:productId", protect, updateCartItem);     // PUT /api/cart/:productId
router.delete("/:productId", protect, removeCartItem);  // DELETE /api/cart/:productId

module.exports = router;
