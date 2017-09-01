/* IMPORT STATEMENTS */
// Imports and PG Promise module
const pgp = require('pg-promise')();

// Imports and initializes PG Promise module
const dbConfig = require('../config/dbConfig');

// Initializes databse connection
const db = pgp(dbConfig);

// Exports model methods
module.exports = {

  // Returns all columns from the table
  findAll() {
    return db.many(`
      SELECT *
        FROM words
    ORDER BY id
    `);
  },

  // Returns all columns from the table
  findLang() {
    return db.many(`
      SELECT english, spanish
        FROM words
    ORDER BY id
    `);
  },

  // Returns two columns from the table
  findTwo(lang) {
    return db.many(`
      SELECT english, $/lang/
        FROM words
    ORDER BY id
    `, lang);
  },

  // Returns individual entry from the table
  findById(id) {
    return db.one(`
      SELECT english, spanish
        FROM words
       WHERE id = $1
    `, id);
  },

  // Adds a new entry to the table
  save(word) {
    return db.one(`
      INSERT INTO words
      (english, spanish)
      VALUES
      ($/english/, $/spanish/)
      RETURNING *
    `, word);
  },

  // Changes an entry in the table
  update(word) {
    return db.one(`
      UPDATE words
      SET
      english = $/english/,
      spanish = $/spanish/
      WHERE id = $/id/
      RETURNING *
    `, word);
  },

  // Removes an entry from the table
  destroy(id) {
    return db.none(`
      DELETE
        FROM words
      WHERE id = $1
    `, id);
  },
};
