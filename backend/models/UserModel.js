import { DataTypes, Sequelize } from 'sequelize';
import db from '../config/Database.js';

// Ensure the phone column type is STRING
const Users = db.define(
  'users',
  {
    name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING, // Ensure this matches the database schema
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Users;
