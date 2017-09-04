// Imports Express Node framework
const express = require('express');

// Imports controller for the application
const controller = require('../controllers/wordController');

// Imports controller for application views
const views = require('../controllers/viewController');

// Initializes Router
const wordRouter = express.Router();

/* Routes */
// Directs traffic for editing view
wordRouter.get('/:id/edit', controller.getOne, views.showWordForm, views.show404);

// Directs traffic for new entry view
wordRouter.get('/new', controller.makeNewWord, views.showWordForm);

// Directs traffic for selected entry view
wordRouter.get('/:id/')
  .get(controller.getOne, views.showOne, views.show404)
  .put(controller.update, views.handleUpdate, views.show406)
  .delete(controller.destroy, views.handleChange, views.show404);

// Directs traffic for default view
wordRouter.route('/')
  .get(controller.index, views.showWords, views.show404)
  .post(controller.create, views.handleChange, views.show406);


// Exports the module
module.exports = wordRouter;
