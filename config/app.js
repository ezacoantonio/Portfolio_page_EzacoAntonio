var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('../apps/routes/index');
app.use('/',indexRouter);
var usersRouter = require('../apps/routes/users');
app.use('/static-projects', express.static(path.join(__dirname, 'public/static-projects')));
app.use('/public/ResumeEzacoAntonio', express.static(path.join(__dirname, 'public/Resume Ezaco Antonio')));



// view engine setup
app.set('views', path.join(__dirname, '../apps/views'));
app.set('view engine', 'ejs');


//Middleware and Static Files
app.use(logger('dev')); 
app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: false })); //Express middleware for handling URL-encoded data.
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));


//Routes handled by another file
app.use('/', indexRouter);
app.use('/users', usersRouter);

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
