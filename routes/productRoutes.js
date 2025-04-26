const express = require("express");
const router = express.Router();
const { 
  getAllProducts, 
  getProductById, 
  deleteProduct, 
  updateProduct 
} = require("../controllers/productController");

// GET all products
router.get("/", getAllProducts);

// GET single product by ID
router.get("/:id", getProductById);

// PUT update product by ID
router.put("/:id", updateProduct);

// DELETE product by ID
router.delete("/:id", deleteProduct);

module.exports = router;
