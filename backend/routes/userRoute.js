import express from 'express';
const router = express.Router();

import {
  loginUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  updateUser,
  getUserById,
} from '../controllers/userController.js';
import { authenticate, isAdmin } from '../middleware/authMiddleware';

router.route('/').post(registerUser).get(authenticate, isAdmin, getUsers);
router.post('/login', loginUser);
router
  .route('/profile')
  .get(authenticate, getUserProfile)
  .put(authenticate, updateUserProfile);
router
  .route('/:id')
  .delete(authenticate, isAdmin, deleteUser)
  .get(authenticate, isAdmin, getUserById)
  .put(authenticate, isAdmin, updateUser);

export default router;
