import { query } from "../query/query.js";
import TABLES from "../config/tables.js";
import userSchema from "../validations/userValidation.js";
import bcrypt from "bcrypt";
import db from "../db.js";

const createUser = async (req, res) => {
  const { role, email, password, username } = req.body;

  const { error } = userSchema.validate(req.body);

  if (error)
    return res.status(400).send({
      ResponseData: [],
      ResponseCode: 400,
      Error: error.details[0].message,
    });

  const sql = `SELECT * FROM ${TABLES.USERS} WHERE email=? OR username=?`;

  db.execute(sql, [email, username], async (err, data) => {
    if (err) {
      return res.json({ message: err });
    } else {
      if (!!data.length) {
        return res.status(400).send({
          ResponseData: [],
          ResponseCode: 400,
          Error: data[0].email === email ? "Email_exists" : "Username_exists",
        });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);

        const insertSql = `INSERT INTO ${TABLES.USERS} (role, email, password, username, avatar) VALUES (?, ?, ?, ?, ?)`;

        query(
          insertSql,
          [role, email, hashedPassword, username, "default"],
          res,
          false
        );
      }
    }
  });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM ${TABLES.USERS} WHERE email=${email} and  password=${password}`;

  query(sql, res, false);
};

export { createUser, loginUser };
