import express from 'express';
import { getSymptoms } from '../controllers/SymptomsController.js';

const router = express.Router();

router.get('/symptoms', getSymptoms);

export default router;
