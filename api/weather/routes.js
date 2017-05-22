'use strict';

const
  namespace = require('hapi-namespace'),
  caches = require('./cache.js'),
  handlers = require('./handlers.js');

module.exports = namespace('/api/weather',
  [
    {
      method: 'GET',
      path: '/location/{name}',
      handler: handlers.weatherHandler('name', 'geolookup', caches.locationCache),
      config: {
        description: 'Returns weather stations for a location',
      }
    },
    {
      method: 'GET',
      path: '/current/{location}',
      handler: handlers.weatherHandler('location', 'conditions', caches.currentCache),
      config: {
        description: 'Returns current conditions for a location',
      }
    },
    {
      method: 'GET',
      path: '/forecast/{location}',
      handler: handlers.weatherHandler('location', 'forecast', caches.forecastCache),
      config: {
        description: 'Returns a forecast for a location',
      }
    },
    {
      method: 'GET',
      path: '/extendedforecast/{location}',
      handler: handlers.weatherHandler('location', 'forecast10day', caches.extForecastCache),
      config: {
        description: 'Returns an extended forecast for a location',
      }
    },
  ]
);
