'use strict';

const
  methods = require('./methods.js'),
  server = require('../../server.js');

const
  SECONDS = 1000,
  MINUTES = 60 * SECONDS,
  HOURS = 60 * MINUTES,
  DAYS = 24 * HOURS;

function createCache(expiresIn, staleIn, segment) {
  return {
    generateFunc: methods.weatherGet,
    generateTimeout: 1 * SECONDS,
    expiresIn: expiresIn,
    staleIn: staleIn,
    staleTimeout: 100,
    cache: 'redisCache',
    segment: segment
  }
}

module.exports = {
  currentCache: server.cache(createCache(30 * MINUTES, 15 * MINUTES, 'current')),
  extForecastCache: server.cache(createCache(2 * HOURS, 1 * HOURS, 'extended-forecast')),
  forecastCache: server.cache(createCache(2 * HOURS, 1 * HOURS, 'forecast')),
  locationCache: server.cache(createCache(30 * DAYS, 23 * HOURS, 'location'))
};
