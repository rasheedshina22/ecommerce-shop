import express from 'express';
const router = express.Router();
import { authenticate } from '../middleware/authMiddleware.js';

import { addOrderItems } from '../controllers/orderController.js';

router.route('/').post(authenticate, addOrderItems);

export default router;
