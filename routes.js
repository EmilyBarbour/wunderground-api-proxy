'use strict';

const
  index = require('./api/routes.js'),
  weather = require('./api/weather/routes.js');

// allows for routes on different namespaces
module.exports = [].concat(index, weather);
