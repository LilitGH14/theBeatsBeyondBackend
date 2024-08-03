import mysql from "mysql";

export const db = mysql.createConnection({
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

export const query = (sql, res, selectFirst) => {
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ message: err });
    } else {
      const _data = selectFirst ? (data[0] ? data[0] : null) : data;
      return res.json(_data);
    }
  });
};
