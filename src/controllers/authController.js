import { query } from "../query/query.js"

const table = "users";

const createUser = (req, res) => {
  const { role, email, password, username } = req.body;

  const sql = `INSERT INTO ${table} (role, email, password, username) VALUES (${
    (role, email, password, username)
  })`;

  query(sql, res, false);
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM ${table} WHERE email=${email} and  password=${password}`;

  query(sql, res, false);
};

export { createUser, loginUser };
