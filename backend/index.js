import express from 'express';
import dotenv from 'dotenv';
import db from './config/Database.js';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import articleRoutes from './routes/ArticlesRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Menghubungkan ke database dan memastikan koneksi
try {
  await db.authenticate();
  console.log('Database Connected...');
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
app.use('/api', articleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
