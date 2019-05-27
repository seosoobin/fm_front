module.exports = (function (env) {
  var config = {};
  var devConfig = {
    baseUrl: 'http://localhost:3001',
  };
  var productConfig = {
    baseUrl: 'http://tornado-fm-api.herokuapp.com/',
  };
  switch (env) {
    case 'production':
      config = productConfig;
      break;

    case 'development':
      config = devConfig;
      break;

    default:
      console.error('NODE_ENV environment variable not set. -> development');
      config = devConfig;
      // process.exit(1);
  }

  return config;
})(process.env.NODE_ENV);