import express from 'express';
import dotenv from 'dotenv';
import db from './config/Database.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './routes/index.js';  // Mengimpor router untuk rute aplikasi
import Clinic from './models/ClinicModel.js';  // Model Clinic
import Symptom from './models/SymptomModel.js';  // Model Symptom
import Result from './models/ResultModel.js';  // Model Result
import User from './models/UserModel.js';  // Model User
import ArticleRoute from './routes/ArticleRoutes.js';  // Import ArticleRoute
import RujukanRoute from './routes/RujukanRoutes.js';  // Import RujukanRoute
import ClinicRoute from './routes/ClinicRoutes.js';  // Import ClinicRoute

dotenv.config();  // Memuat variabel lingkungan dari file .env

const app = express();
const PORT = process.env.PORT || 5000;

try {
  await db.authenticate();
  console.log('Database Connected...');
  await db.sync();  
  console.log('Database synchronized...');
} catch (error) {
  console.error('Database connection error:', error);
}

const corsOptions = {
  origin: 'http://localhost:3000',  // Ganti dengan URL frontend Anda jika perlu
  credentials: true,  // Izinkan pengiriman cookie
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(router);  // Use the main router
app.use('/api', ArticleRoute);  // Use /api prefix for ArticleRoute
app.use('/api', RujukanRoute);  // Use /api prefix for RujukanRoute
app.use('/api', ClinicRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
