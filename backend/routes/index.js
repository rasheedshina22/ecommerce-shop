import express from 'express';

import productRoutes from './productRoutes';
import userRoutes from './userRoute';
import orderRoutes from './orderRoutes';
import uploadRoute from './uploadRoute';

const router = express.Router();

router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/orders', orderRoutes);
router.use('/upload', uploadRoute);

export default router;
