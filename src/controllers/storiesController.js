import { query } from "../query/query.js";
import { splitTags } from "../query/queryHelpers.js";
import TABLES from "../config/tables.js";

const getStories = (req, res) => {
  const sql = `
    SELECT ${TABLES.STORIES}.*, ${TABLES.USERS}.username 
    FROM ${TABLES.STORIES} 
    LEFT JOIN ${TABLES.USERS} 
    ON ${TABLES.STORIES}.userId = ${TABLES.USERS}.id
  `;

  query(sql, null, res, false);
};

const getStory = (req, res) => {
  const { id } = req.params;

  const sql = `SELECT * FROM ${TABLES.STORIES} WHERE id=?`;

  query(sql, [id], res, true, splitTags);
};

const addStory = (req, res) => {
  const { title, tags, description, singers, writers } = req.body;

  //check validation
  // if (!userId || !title || !description) {
  //   return res.status(400).json({ error: 'userId, title, and description are required' });
  // }

  const sql =
    "INSERT INTO stories (userId, title, tags, description, singers, writers) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [1, title, tags, description, singers, writers];

  query(sql, values, res, true);
};

const deleteStory = (req, res) => {
  const { id } = req.params;

  const sql = `DELETE * FROM ${TABLES.STORIES} WHERE id=${id}`;

  query(sql, res, true);
};

const updateStory = (req, res) => {
  const { id } = req.params;
  const { userId, title, tags, description, singers, writers } = req.body;

  const sql = `
    UPDATE stories 
    SET userId = ?, title = ?, tags = ?, description = ?, singers = ?, writers = ? 
    WHERE id = ?
  `;
  const values = [userId, title, tags, description, singers, writers, id];

  query(sql, values, res, true);
};

export { getStories, getStory, addStory, deleteStory, updateStory };
