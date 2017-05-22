'use strict';

const
  config = require('../../config.json'),
  wreck = require('wreck');

const weatherGet = function(params, callback) {
  const url = 'http://api.wunderground.com/api/' + config.wundergroundKey + '/' + params.endpoint +'/q/' + params.id + '.json';
  const options = { json: true };
  wreck.get(url, options, (err, res, payload) => {
    callback(err, payload);
  });
};

module.exports = {
  weatherGet: weatherGet
}
