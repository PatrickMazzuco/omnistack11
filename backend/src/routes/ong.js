import { Router } from 'express';

import ongController from '../controllers/ong';

const router = Router();

// @route   POST /ongs
// @desc    Register ong
// @access  Public
router.post('/ongs', ongController.createOng);

export default router;
