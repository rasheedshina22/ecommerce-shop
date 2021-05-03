import express from 'express';
const router = express.Router();

import { authenticate, isAdmin } from '../middleware/authMiddleware';
import {
  getProducts,
  getProduct,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
} from '../controllers/productController';

router.route('/').get(getProducts).post(authenticate, isAdmin, createProduct);
router.post('/:id/reviews', authenticate, createProductReview);
router
  .route('/:id')
  .get(getProduct)
  .delete(authenticate, isAdmin, deleteProduct)
  .put(authenticate, isAdmin, updateProduct);

export default router;
