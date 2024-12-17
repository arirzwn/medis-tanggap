import express from 'express';
import dotenv from 'dotenv';
import db from './config/Database.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './routes/index.js'; // Mengimpor router untuk rute aplikasi
import ArticleRoute from './routes/ArticleRoutes.js'; // Import ArticleRoute
import RujukanRoute from './routes/RujukanRoutes.js'; // Import RujukanRoute
import ClinicRoute from './routes/ClinicRoutes.js'; // Import ClinicRoute

dotenv.config(); // Memuat variabel lingkungan dari file .env

const app = express();
const PORT = process.env.PORT || 5000;

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

// Move these routes before the main router
app.use('/api', ArticleRoute);
app.use('/api', RujukanRoute);
app.use('/api', ClinicRoute);
app.use(router); // Use the main router

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
