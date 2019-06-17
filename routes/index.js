
var path = require('path');
var createError = require('http-errors');
var main = require('./sub_route/main');
var team = require('./sub_route/team');
var config = require('../config');


module.exports = function (app) {
  app.use('/', main);
  app.use('/team', team);

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
};
