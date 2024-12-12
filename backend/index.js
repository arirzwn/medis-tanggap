import express from 'express';
import dotenv from 'dotenv';
import db from './config/Database.js';  // Mengimpor koneksi ke database
import router from './routes/index.js';  // Mengimpor router untuk rute aplikasi
import cookieParser from 'cookie-parser';  // Middleware untuk parsing cookie
import cors from 'cors';  // Middleware untuk CORS
import Clinic from './models/ClinicModel.js';  // Model Clinic
import Symptom from './models/SymptomModel.js';  // Model Symptom
import Result from './models/ResultModel.js';  // Model Result
import User from './models/UserModel.js';  // Model User

dotenv.config();  // Memuat variabel lingkungan dari file .env

const app = express();


try {
  await db.authenticate();
  console.log('Database Connected...');
  

  await db.sync();  
  console.log('Database synchronized...');

} catch (error) {
  console.log('Database connection error:', error);
}

const corsOptions = {
  origin: 'http://localhost:3000',  // Ganti dengan URL frontend Anda jika perlu
  credentials: true,  // Izinkan pengiriman cookie
};


app.use(cors(corsOptions)); 
app.use(cookieParser());  
app.use(express.json());  
app.use(router);  


app.listen(5000, () => console.log('Server running at port 5000'));
