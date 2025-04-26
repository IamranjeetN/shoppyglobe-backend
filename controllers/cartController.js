const Cart = require('../models/cartModel');
const Product = require('../models/productModel');

// ✅ Get the current user's cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    if (!cart) {
      return res.status(200).json({ items: [] }); // Return empty cart if none found
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get cart' });
  }
};

// ✅ Add a product to the cart
const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  let cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    cart = new Cart({ user: req.user._id, items: [] });
  }

  const existingItem = cart.items.find((item) =>
    item.product.toString() === productId
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ product: productId, quantity });
  }

  await cart.save();
  res.status(201).json(cart);
};

// ✅ Update quantity of a cart item
const updateCartItem = async (req, res) => {
  const { quantity } = req.body;
  const { productId } = req.params;

  const cart = await Cart.findOne({ user: req.user._id });

  if (!cart) return res.status(404).json({ error: 'Cart not found' });

  const item = cart.items.find((i) => i.product.toString() === productId);
  if (!item) return res.status(404).json({ error: 'Product not in cart' });

  item.quantity = quantity;
  await cart.save();

  res.json(cart);
};

// ✅ Remove a product from cart
const removeCartItem = async (req, res) => {
  const { productId } = req.params;

  const cart = await Cart.findOne({ user: req.user._id });

  if (!cart) return res.status(404).json({ error: 'Cart not found' });

  cart.items = cart.items.filter(
    (item) => item.product.toString() !== productId
  );

  await cart.save();
  res.json(cart);
};

module.exports = {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem
};
