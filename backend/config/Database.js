import { Sequelize } from 'sequelize';

const db = new Sequelize('medis_tanggap', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Uncomment this block when you need to update database tables
/*
db.sync({ alter: true })
  .then(() => {
    console.log('Database & tables created or updated!');
  })
  .catch((error) => {
    console.error('Unable to create or update tables, shutting down...', error);
  });
*/

export default db;
