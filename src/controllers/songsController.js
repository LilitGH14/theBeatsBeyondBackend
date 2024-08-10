import { query } from "../query/query.js";
import TABLES from "../config/tables.js";

const getSongs = (req, res) => {
  const sql = `
    SELECT ${TABLES.SONGS}.*, ${TABLES.USERS}.username 
    FROM ${TABLES.SONGS} 
    LEFT JOIN ${TABLES.USERS} 
    ON ${TABLES.SONGS}.userId = ${TABLES.USERS}.id
    WHERE ${TABLES.SONGS}.isShared=1
  `;

  query(sql, null, res, false);
};

const getSongsByCategory = (req, res) => {
  const { category } = req.params;

  const sql = `
    SELECT * FROM ${TABLES.SONGS} 
    WHERE ${TABLES.SONGS}.isShared=1 AND ${TABLES.SONGS}.category=? 
  `;

  query(sql, [category], res, false);
};

const getSong = (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT ${TABLES.SONGS}.*, ${TABLES.USERS}.username 
    FROM ${TABLES.SONGS} 
    LEFT JOIN ${TABLES.USERS} 
    ON ${TABLES.SONGS}.userId = ${TABLES.USERS}.id 
    WHERE ${TABLES.SONGS}.id = ?;
  `;

  query(sql, [id], res, true);
};

const updateSong = (req, res) => {
  const { id } = req.params;
  const { songGivenName, description, lyrics, isShared } = req.body;

  const sql = `
    UPDATE ${TABLES.SONGS} 
    SET songGivenName = ?, description = ?, lyrics = ?, isShared = ?
    WHERE id = ?
  `;
  const values = [songGivenName, description, lyrics, isShared, id];

  query(sql, values, res, true);
};

export { getSongs, getSong, getSongsByCategory, updateSong };
