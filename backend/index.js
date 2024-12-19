import express from 'express';
import dotenv from 'dotenv';
import db from './config/Database.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path'; // Mengimpor path untuk penanganan path file
import router from './routes/index.js'; // Mengimpor router untuk rute aplikasi
import Clinic from './models/ClinicModel.js'; // Model Clinic
import ArticleRoute from './routes/ArticleRoutes.js'; // Import ArticleRoute
import RujukanRoute from './routes/RujukanRoutes.js'; // Import RujukanRoute
import ClinicRoute from './routes/ClinicRoutes.js'; // Import ClinicRoute

dotenv.config(); // Memuat variabel lingkungan dari file .env

const app = express();
const PORT = process.env.PORT || 5000;

// Setup middleware in correct order
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// Middleware setup
app.use('/uploads', express.static(path.join(path.resolve(), 'uploads')));

// Database initialization
(async () => {
  try {
    await db.authenticate();
    console.log('Database Connected...');

    // Force true will drop tables if they exist
    await db.sync({ force: true });
    console.log('Database synchronized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
  }
})();

// Routes
app.use('/api', ArticleRoute);
app.use('/api', RujukanRoute);
app.use('/api', ClinicRoute);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
