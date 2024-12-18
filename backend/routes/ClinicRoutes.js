import express from 'express';
import upload from '../middleware/multerConfig.js';
import { addClinic } from '../controllers/ClinicController.js';

const router = express.Router();

router.post('/add', upload, addClinic);

export default router;
