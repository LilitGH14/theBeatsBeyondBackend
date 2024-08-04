import { query } from "../query/query.js";

const table = "songs";

const getSongs = (req, res) => {
  const sql = `SELECT * FROM ${table}`;

  query(sql, res, false);
};

const getSong = (req, res) => {
  const { id } = req.params;
  
  const sql = `SELECT * FROM ${table} WHERE id=${id}`;

  query(sql, res, true);
};

export { getSongs, getSong };