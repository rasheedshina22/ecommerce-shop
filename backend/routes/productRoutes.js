import express from 'express';
const router = express.Router();

import { authenticate, isAdmin } from '../middleware/authMiddleware';
import {
  getProducts,
  getProduct,
  deleteProduct,
} from '../controllers/productController';

router.route('/').get(getProducts);
router
  .route('/:id')
  .get(getProduct)
  .delete(authenticate, isAdmin, deleteProduct);

export default router;
