import { Sequelize } from 'sequelize';

const db = new Sequelize('medis_tanggap', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
