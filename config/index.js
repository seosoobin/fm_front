module.exports = (function (env) {
  var config = {};
  switch (env) {
    case 'production':
      config = require('../env/production');
      break;

    case 'development':
      config = require('../env/development');
      break;

    default:
      console.error('NODE_ENV environment variable not set. -> development');
      config = require('../env/development');
      // process.exit(1);
  }

  return config;
})(process.env.NODE_ENV);