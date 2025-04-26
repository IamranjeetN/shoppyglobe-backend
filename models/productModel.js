const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
    },
    stock: {
      type: Number,
      required: [true, 'Stock quantity is required'],
      min: [0, 'Stock cannot be negative'],
    },
  },
  {
    timestamps: true,
  }
);

// ✅ Prevent model overwrite error
module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
