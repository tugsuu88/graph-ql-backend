import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';

dotenv.config();

const index = new Sequelize({
  dialect: 'mariadb',
  host: process.env.DB_HOST,
  port: 3307,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: true,
  models: [__dirname + '/*.model.ts'],
  modelMatch: (filename, member) =>
    filename
      .substring(0, filename.indexOf('.model'))
      .replaceAll('-', '')
      .toLowerCase() === member.toLowerCase(),
  pool: {
    max: 10,
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
});

export default index;
