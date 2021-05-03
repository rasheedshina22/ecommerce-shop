import express from 'express';
const router = express.Router();
import { authenticate, isAdmin } from '../middleware/authMiddleware';

import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} from '../controllers/orderController';

router
  .route('/')
  .post(authenticate, addOrderItems)
  .get(authenticate, isAdmin, getOrders);
router.route('/myorders').get(authenticate, getMyOrders);
router.route('/:id').get(authenticate, getOrderById);
router.route('/:id/pay').put(authenticate, updateOrderToPaid);
router.route('/:id/deliver').put(authenticate, isAdmin, updateOrderToDelivered);

export default router;
