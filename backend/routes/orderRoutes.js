import express from 'express';
const router = express.Router();
import { authenticate } from '../middleware/authMiddleware';

import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} from '../controllers/orderController';

router.route('/').post(authenticate, addOrderItems);
router.route('/myorders').get(authenticate, getMyOrders);
router.route('/:id').get(authenticate, getOrderById);
router.route('/:id/pay').put(authenticate, updateOrderToPaid);

export default router;
