const { Sequelize } = require('sequelize');

require('dotenv').config();

const {
  DB_USERNAME,
  DB_DATABASE,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_URI
} = process.env;


module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "dialect": "mysql",
    "port": DB_PORT || 3306, // default MySQL port
    "pool": {
      "max": 5,
      "min": 0,
      "acquire": 30000,
      "idle": 10000
    }
  }
}

// const sequelizeOptions = {
//   dialect: 'mysql',
//   define: {
//     timestamps: true,
//   },
//   dialectOptions: {
//     connectTimeout: 60000, // Set connection timeout to 60 seconds
//   },
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };

// const db = DB_URI
//   ? new Sequelize(DB_URI, sequelizeOptions)
//   : new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
//     host: DB_HOST,
//     port: DB_PORT || 3306, // Default MySQL port
//     ...sequelizeOptions
//   });

// module.exports = db;
