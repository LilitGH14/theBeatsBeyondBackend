import { query } from "../query/query.js";
import TABLES from "../config/tables.js";
import userSchema from "../validations/userValidation.js";
import bcrypt from "bcrypt";
import db from "../db.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = "your_secret_key";

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

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM ${TABLES.USERS} WHERE email=?`;

  db.execute(sql, [email], async (err, data) => {
    if (err) {
      return res.json({ message: err });
    } else {
      if (data.length === 0) {
        return res.status(400).json({ message: "Invalid_email_password" });
      }

      const user = data[0];

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Invalid_email_password" });
      }

      const token = jwt.sign(
        { userId: user.id, username: user.username },
        JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      return res.json({ ResponseData: { ...user, token }, ResponseCode: 200 });
    }
  });
};

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    req.user = user;
    next();
  });
};

export { createUser, loginUser, authenticateToken };
