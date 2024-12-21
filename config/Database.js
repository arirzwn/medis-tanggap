import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
  }
);

// Function to initialize database
const initializeDatabase = async () => {
  try {
    await db.authenticate();
    console.log('Database connection established.');

    // Hapus sync() atau gunakan { force: false } untuk mencegah kehilangan data
    await db.sync({
      force: false, // Make sure this is false
      alter: true,
      logging: false,
    });

    console.log('Database connection verified successfully!');
  } catch (error) {
    console.error('Database initialization error:', error);
    throw error;
  }
};

// Initialize database
initializeDatabase().catch((error) => {
  console.error('Failed to initialize database:', error);
});

export default db;
