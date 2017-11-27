const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const methodOverride = require('method-override');

const config = require('./config');

// require routes
const indexRoutes = require('./app/routes/index');
const requestRoutes = require('./app/routes/request');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongooseUri, { useMongoClient: true });

const app = express();
app.use(flash());
app.use(require('express-session')({
  secret: config.expressSessionSecret,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));
app.use(methodOverride('_method'));

app.use('/', indexRoutes);
app.use('/request', requestRoutes);

app.get('*', (req, res) => {
  res.send('404 Not Found');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`nbcu-tvp Server has started on port ${port}`);
});
