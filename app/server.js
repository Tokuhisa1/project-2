/* IMPORT STATEMENTS */
// Imports Express Node framework
const express = require('express');

// Imports Morgan request logger
const logger = require('morgan');

// Assigns PORT number; sets default
const PORT = process.env.PORT || 3000;

// Initializes the application
const app = express();

// Sets up logging using Morgan
app.use(logger('dev'));

// Creates default route for application
app.get('/', (req, res) => {
  res.send('<h1>Hello, World!</h1>');
});

// Activates PORT for traffic
app.listen(PORT, () => {
  console.log(`Server listening on port #${PORT}, in ${app.get('env')} mode.`);
});
