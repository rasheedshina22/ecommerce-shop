import express from 'express';
const router = express.Router();
import { authenticate } from '../middleware/authMiddleware.js';

import { addOrderItems, getOrderById } from '../controllers/orderController.js';

router.route('/').post(authenticate, addOrderItems);
router.route('/:id').get(authenticate, getOrderById);

export default router;
