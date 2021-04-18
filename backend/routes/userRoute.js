import express from 'express';
const router = express.Router();

import {
  loginUser,
  getUserProfile,
  registerUser,
} from '../controllers/userController.js';
import { authenticate } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser);
router.post('/login', loginUser);
router.route('/profile').get(authenticate, getUserProfile);

export default router;
