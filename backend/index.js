import express from 'express';
import dotenv from 'dotenv';
import db from './config/Database.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';  // Mengimpor path untuk penanganan path file
import router from './routes/index.js';  // Mengimpor router untuk rute aplikasi
import Clinic from './models/ClinicModel.js';  // Model Clinic
import ArticleRoute from './routes/ArticleRoutes.js';  // Import ArticleRoute
import RujukanRoute from './routes/RujukanRoutes.js';  // Import RujukanRoute
import ClinicRoute from './routes/ClinicRoutes.js';  // Import ClinicRoute

dotenv.config(); // Memuat variabel lingkungan dari file .env

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware untuk mengakses folder 'uploads'
app.use('/uploads', express.static(path.join(path.resolve(), 'uploads')));
// Add body-parser configuration before other middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


try {
  await db.authenticate();
  console.log('Database Connected...');
  // Uncomment the following line when you need to update table structure
  // await db.sync({ alter: true });
  console.log('Database connected successfully');
} catch (error) {
  console.error('Database connection error:', error);
}

const corsOptions = {
  origin: 'http://localhost:3000', // Ganti dengan URL frontend Anda jika perlu
  credentials: true, // Izinkan pengiriman cookie
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(router);  // Gunakan router utama
app.use('/api', ArticleRoute);  // Gunakan /api untuk ArticleRoute
app.use('/api', RujukanRoute);  // Gunakan /api untuk RujukanRoute
app.use('/api', ClinicRoute);
app.use(router); // Use the main router

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
