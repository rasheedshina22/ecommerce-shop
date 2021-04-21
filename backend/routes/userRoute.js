import express from 'express';
const router = express.Router();

import {
  loginUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js';
import { authenticate } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser);
router.post('/login', loginUser);
router
  .route('/profile')
  .get(authenticate, getUserProfile)
  .put(authenticate, updateUserProfile);

export default router;
