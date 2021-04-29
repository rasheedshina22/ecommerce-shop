import asyncHandler from 'express-async-handler';
import Product from '../models/productModel';

// @desc Fecth all products
// @route GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc Fecth a product
// @route GET /api/products/id
// @access  Public
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc Delete a product
// @route Delete /api/products/id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.status(204).json({ message: 'product deleted' });
  } else {
    res.status(404);
    throw new Error('product not found');
  }
});

export { getProducts, getProduct, deleteProduct };
