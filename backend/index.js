import express from 'express';
import dotenv from 'dotenv';
import db from './config/Database.js';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import Symptom from './models/SymptomModel.js'; 
import Result from './models/ResultModel.js'; 

dotenv.config(); 

const app = express();

// Menghubungkan ke database dan memastikan koneksi
try {
  await db.authenticate();
  console.log('Database Connected...');
  await db.sync(); // Menambahkan ini agar tabel otomatis dibuat jika belum ada
} catch (error) {
  console.log('Database connection error:', error);
}

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log('Server running at port 5000'));
