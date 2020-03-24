import { Router } from 'express';

import incidentController from '../controllers/incident';

const router = Router();

// @route   POST /incidents
// @desc    Register incident
// @access  Public
router.post('/incidents', incidentController.create);

// @route   GET /incidents
// @desc    Fetch all incident
// @access  Public
router.get('/incidents', incidentController.getAll);

// @route   GET /incidents/id
// @desc    Fetch incident by id
// @access  Public
router.get('/incidents:id', incidentController.getById);

// @route   DELETE /incidents/id
// @desc    Delete incident by id
// @access  Public
router.delete('/incidents/:id', incidentController.delete);

export default router;
