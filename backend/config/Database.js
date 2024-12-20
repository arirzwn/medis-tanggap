import { Sequelize } from 'sequelize';

const db = new Sequelize('medis_tanggap', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

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
