import { Router } from 'express';

import ongController from '../controllers/ong';

const router = Router();

// @route   POST /ongs
// @desc    Register ong
// @access  Public
router.post('/ongs', ongController.create);

// @route   GET /ongs
// @desc    Fetch all ong
// @access  Public
router.get('/ongs', ongController.getAll);

export default router;
