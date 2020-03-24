import { Router } from 'express';

import incidentController from '../controllers/incident';

const router = Router();

// @route   POST /incidents
// @desc    Register incident
// @access  Public
router.post('/incidents', incidentController.create);

export default router;
