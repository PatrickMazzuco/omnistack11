import { Router } from 'express';

import authController from '../controllers/auth';

const router = Router();

// @route   POST /login
// @desc    Ong login
// @access  Public
router.post('/auth/login', authController.login);

export default router;
