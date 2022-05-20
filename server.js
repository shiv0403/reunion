require("dotenv").config();
const express = require("express");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT;

// database connection
const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

db.getConnection((err, connection) => {
  if (err) {
    throw err;
  }
  console.log("Connected to postgres database");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
