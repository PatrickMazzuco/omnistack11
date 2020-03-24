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

// @route   GET /ongs/id/incidents
// @desc    Fetch all incidents of an ong
// @access  Public
router.get('/ongs/:id/incidents', ongController.getIncidentsByOng);

export default router;
