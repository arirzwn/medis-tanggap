import express from 'express';
import { getUsers, Register, Login, Logout } from '../controllers/Users.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { refreshToken } from '../controllers/RefreshToken.js';
import { getSymptoms } from '../controllers/SymptomsController.js'; 
import { getResults, createResult, getResultById } from '../controllers/ResultsController.js'; 

const router = express.Router();

// User Routes
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

// Symptom Routes
router.get('/symptoms', getSymptoms); // Route untuk mengambil data gejala

// Result Routes
router.get('/results', getResults); // Route untuk mengambil semua hasil diagnosa
router.get('/results/:id', getResultById); // Route untuk mengambil hasil diagnosa berdasarkan ID

export default router;
