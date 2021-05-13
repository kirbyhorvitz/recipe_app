require('dotenv').config(); 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts'); // around line 6
var session = require('express-session') // around line 7
var flash = require('express-flash-messages') // around line 8

var indexRouter = require('./routes/index');

var SESSION_SECRET = process.env.SESSION_SECRET || "super secret" // around line 17 (before app initialization)

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts); // around line 17
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Flash Messages: around line 29 (after cookie parser)
app.use(session({
  cookie: { maxAge: 60000},
  secret: SESSION_SECRET,
  name: 'recipes-app-session',
  resave: true,
  saveUninitialized: true
}));
app.use(flash())

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
