import mysql from "mysql2";
import { Sequelize } from "sequelize";
import env from "dotenv";

env.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
  }
);

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected successfully");
  }
});

export default db;
