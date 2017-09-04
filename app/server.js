/* IMPORT STATEMENTS */
// Imports Express Node framework
const express = require('express');

// Imports Morgan request logger
const logger = require('morgan');

// Imports Body Parser to make request data more accessible
const bodyParser = require('body-parser');

// Imports Path to reconcile file paths on other machines
const path = require('path');

// Imports Method Override to force UPDATE and DELETE requests
const methodOverride = require('method-override');

// Imports route file for application
const wordRouter = require('./routes/words');


/* INITIALIZATIONS */
// Assigns PORT number; sets default
const PORT = process.env.PORT || 3000;

// Initializes the application
const app = express();


/* MIDDLEWARE */
// Sets up logging using Morgan
app.use(logger('dev'));

// Sets up body parsing for strings [and arrays]
app.use(bodyParser.urlencoded({
  extended: false,
}));

// Sets up body parsing for JSON
app.use(bodyParser.json());

// Points to Views directory
app.set('views', path.join(__dirname, 'views'));

// Marks EJS for use in rendering Views
app.set('view engine', 'ejs');

// Tells Method Override what flag to look for
app.use(methodOverride('_method'));


/* ROUTES */
// Directs to traffic to main route
app.use('/words', wordRouter);

// Creates default route for application
app.get('/', (req, res) => {
  res.send('<h1>Hello, World!</h1>');
});

// Activates PORT for traffic
app.listen(PORT, () => {
  console.log(`Server listening on port #${PORT}, in ${app.get('env')} mode.`);
});
