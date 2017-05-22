'use strict';

const server = require('../../server.js');

function weatherHandler(field, endpoint, cache) {
  return function(request, callback) {
    const
      key = {
        id: request.params[field],
        endpoint: endpoint
      },
      // ttl = 0 to use cache settings
      ttl = 0;
    cache.get(key, (err, value, cached, report) => {
      if (err) {
        return callback(err);
      } else if (cached) {
        return callback(null, cached);
      } else {
        cache.set(key, value, ttl, (err) => {
          callback(err, value);
        });
      }
    });
  }
}

module.exports = {
  weatherHandler: weatherHandler
}
