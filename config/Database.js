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
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

const initializeDatabase = async () => {
  try {
    await db.authenticate();
    console.log('Database connection established.');

    // Hindari sync di production
    if (process.env.NODE_ENV !== 'production') {
      await db.sync({
        force: false,
        alter: true,
        logging: false,
      });
    }

    console.log('Database connection verified successfully!');
  } catch (error) {
    console.error('Database initialization error:', error);
    throw error;
  }
};

initializeDatabase().catch((error) => {
  console.error('Failed to initialize database:', error);
});

export default db;
