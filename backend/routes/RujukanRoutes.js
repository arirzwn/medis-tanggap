import express from 'express';
import {
  getRujukan,
  getRujukanById,
  createRujukan,
  updateRujukan,
  deleteRujukan,
} from '../controllers/RujukanController.js';

const router = express.Router();

router.get('/rujukan', getRujukan);
router.get('/rujukan/:id', getRujukanById);
router.post('/rujukan', createRujukan);
router.patch('/rujukan/:id', updateRujukan);
router.delete('/rujukan/:id', deleteRujukan);

export default router;
