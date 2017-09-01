module.exports = {

  // Returns a 404 error
  show404(err, req, res, next) {
    res.sendStatus(404);
  },

  // Returns a 406 error
  show406(err, req, res, next) {
    res.sendStatus(406);
  },

  // Passes in data to master view
  showWords(req, res) {
    res.render('words/word-index', {
      data: res.locals.words,
    });
  },

  // Passes in data for single view
  showOne(req, res) {
    res.render('words/word-single', {
      data: res.locals.word,
    });
  },

  // Redveals Add view
  showAddForm(req, res) {
    res.render('words/word-add');
  },

  // Redirects to Edit view
  showEditForm(req, res) {
    res.render('words/word-edit', {
      data: res.locals.quote,
    });
  },

  // Redirects for addition/deletion of an entry
  handleChange(req, res) {
    res.redirect('/words');
  },

  // Redirects for updated entry
  handleUpdate(req, res) {
    res.redirect(`/words/${req.params.id}`);
  },
};
