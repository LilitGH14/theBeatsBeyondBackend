import mysql from "mysql2";

 const db = mysql.createConnection({
  host: "localhost",
  database: "theBeatsBeyond",
  user: "root",
  password: "",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected successfully");
  }
});

export default db;
