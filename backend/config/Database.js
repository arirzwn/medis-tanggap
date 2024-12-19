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

    // Only alter tables if needed, don't force drop
    await db.sync({
      alter: true,
      logging: false,
    });

    console.log('Database & tables synchronized successfully!');
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
