/* IMPORT STATEMENTS */
// Imports and PG Promise module
const pgp = require('pg-promise')();

// Imports and initializes PG Promise module
const dbConfig = require('../config/dbConfig');

// Initializes databse connection
const db = pgp(dbConfig);

// Exports model methods
module.exports = {

  // Returns two languages from the table
  findAll() {
    return db.many(`
      SELECT english, spanish
        FROM words
    ORDER BY id
    `);
  },

  // Returns individual translation from the table
  findById(id) {
    return db.one(`
      SELECT english, spanish
        FROM words
       WHERE id = $1
    `, id);
  },

  // Adds a new translation to the table
  save(word) {
    return db.one(`
      INSERT INTO words
      (english, spanish)
      VALUES
      ($/english/, $/spanish/)
      RETURNING *
    `, word);
  },

  // Changes a translation in the table
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
};
