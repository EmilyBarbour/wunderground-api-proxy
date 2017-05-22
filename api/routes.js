'use strict';

const namespace = require('hapi-namespace');

module.exports = namespace('/api',
  [
    {
      method: 'GET',
      path: '/health',
      handler: function (request, reply) {
        reply('Alive!');
      }
    },
  ]
);
