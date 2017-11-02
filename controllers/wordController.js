// Imports model for application
const wordDB = require('../models/wordDB');

// Exports controller for application
module.exports = {

  // Handles input for a new entry to table
  makeNewWord(req, res, next) {
    const newWord = {
      id:      null,
      english: null,
      spanish: null,
    };
    res.locals.word = newWord;
    next();
  },

  // Handles request for two columns from table
  index(req, res, next) {
    wordDB.findAll()
      .then((words) => {
        res.locals.words = words;
        next();
      })
      .catch(err => next(err));
  },

  // Handles request for one entry from table
  getOne(req, res, next) {
    wordDB.findById(req.params.id)
      .then((word) => {
        console.log("word:", word);
        res.locals.word = word;
        next();
      })
      .catch(err => next(err));
  },

  // Handles request to add an entry to table
  create(req, res, next) {
    wordDB.save(req.body)
      .then((word) => {
        res.locals.word = word;
        next();
      })
      .catch(err => next(err));
  },

  // Handles request for update an entry in table
  update(req, res, next) {
    wordDB.update(req.body)
      .then((word) => {
        res.locals.word = word;
        next();
      })
      .catch(err => next(err));
  },

  // Handles removal of one entry from table
  destroy(req, res, next) {
     console.log('req.params.id:', req.params.id);
    wordDB.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },

  // Handles render of word form
  // showEditForm: (req, res) => {
  //   res.send({
  //     message: 'I\'m the HTML form for a word entry. I post to /words.',
  //   });
  // },
};
