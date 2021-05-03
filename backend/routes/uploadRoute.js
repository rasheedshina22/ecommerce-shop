import express from 'express';
const router = express.Router();

import { authenticate, isAdmin } from '../middleware/authMiddleware';
import { multerUploads, uploadImage } from '../middleware/multer';

router.post('/', authenticate, isAdmin, multerUploads, uploadImage);

export default router;
