'use strict';

const
  server = require('./server.js'),
  routes = require('./routes.js');

// define routes
server.route(routes);

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
