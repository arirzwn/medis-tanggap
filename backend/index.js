import express from 'express';
import dotenv from 'dotenv';
import db from './config/Database.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import ArticleRoute from './routes/ArticleRoutes.js';
import router from './routes/index.js'; // Add this import

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Menghubungkan ke database dan memastikan koneksi
try {
  await db.authenticate();
  console.log('Database Connected...');
} catch (error) {
  console.error('Database connection error:', error);
}

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(router); // Add this line to use the main router
app.use('/api', ArticleRoute); // Changed this line to use /api prefix

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
