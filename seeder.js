const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/productModel');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const products = [
  {
    name: 'Wireless Mouse',
    price: 20.99,
    description: 'Ergonomic wireless mouse with long battery life.',
    stock: 100,
  },
  {
    name: 'Bluetooth Headphones',
    price: 49.99,
    description: 'Noise-cancelling over-ear headphones.',
    stock: 50,
  },
  {
    name: 'Mechanical Keyboard',
    price: 89.99,
    description: 'RGB mechanical keyboard with blue switches.',
    stock: 70,
  },
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('✅ Sample products inserted!');
    process.exit();
  } catch (error) {
    console.error('❌ Error with data import', error);
    process.exit(1);
  }
};

importData();
