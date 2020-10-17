require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV,
  port: process.env.PORT || 4500,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
}

export default config;