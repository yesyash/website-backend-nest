// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config();

/** @type {import('@nestjs/sequelize').SequelizeModuleOptions} */
const dbConfig = {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const sequelizeConfig = {
  [process.env.ENV]: dbConfig,
  development: dbConfig,
};

module.exports = sequelizeConfig;
