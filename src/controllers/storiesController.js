import { query } from "../query/query.js";
import { splitTags } from "../query/queryHelpers.js";

const storiesTable = "stories";
const usersTable = "users";

const getStories = (req, res) => {
  const sql = `
  SELECT ${storiesTable}.*, ${usersTable}.username FROM ${storiesTable} 
  LEFT JOIN ${usersTable} 
  ON ${storiesTable}.userId = ${usersTable}.id
  `;

  query(sql, res, false);
};

const getStory = (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM ${storiesTable} WHERE id=${id}`;

  query(sql, res, true, splitTags);
};

const addStory = (req, res) => {
  const { title, tags, description, singers, writers } = req.body;
  const sql = `
  INSERT INTO ${storiesTable} 
 (userId, title, tags, description, singers, writers) 
  VALUES (1, ${title}, ${null}, ${description}, ${null}, ${null}) `;

  query(sql, res, true);
};

const deleteStory = (req, res) => {
  const { id } = req.params;
  const sql = `DELETE * FROM ${storiesTable} WHERE id=${id}`;

  query(sql, res, true);
};

const updateStory = (req, res) => {
  const { userId, title, tags, description, votedCount, isInspired } =
    req.params;
  const sql = `
  UPDATE ${storiesTable} 
  SET userId=${userId}, title=${title}, tags=${tags}, description=${description}, votedCount=${votedCount}, isInspired=${isInspired}
  WHERE id=${id}`;

  query(sql, res, true);
};

export { getStories, getStory, addStory, deleteStory, updateStory };
