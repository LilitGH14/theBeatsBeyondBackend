import { query } from "../../db.js";

const table = "stories";

const getStories = (req, res) => {
  const sql = `SELECT * FROM ${table}`;

  query(sql, res, false);
};

const getStory = (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM ${table} WHERE id=${id}`;

  query(sql, res, true);
};

export { getStories, getStory };
