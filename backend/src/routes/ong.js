import { Router } from 'express';

import ongController from '../controllers/ong';

const router = Router();

// @route   POST /ongs
// @desc    Register ong
// @access  Public
router.post('/ongs', ongController.createOng);

// @route   GET /ongs
// @desc    Fetch all ong
// @access  Public
router.get('/ongs', ongController.getOngs);

export default router;
