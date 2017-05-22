'use strict';

const
  Hapi = require('hapi'),
  config = require('./config.json');

// basic hapi/catbox-redis config
const server = new Hapi.Server({
  cache: [{
    name: 'redisCache',
    engine: require('catbox-redis'),
    host: config.redisHost,
    port: config.redisPort,
    //   password: config.redisPassword
  }]
});

// connection config
server.connection({
  host: config.host,
  port: config.port
});

// cors from ember server
server.register({
  register: require('hapi-cors'),
  options: {
    origins: ['http://localhost:4200']
  }
});

module.exports = server;
