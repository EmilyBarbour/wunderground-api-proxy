# wunderground-api-proxy
Creates a proxy api for weatherunderground.com using hapi.js/node.js
Caches results using catbox-redis to avoid hitting rate limits

## Installation
* `brew update && brew install redis`
* `git clone git@github.com:EmilyBarbour/wunderground-api-proxy.git` this repository
* `cd wunderground-api-proxy`
* `npm install`

## Running / Development
* `redis-server`
* `node .`

## Further Reading / Useful Links

* [wunderground API](https://www.wunderground.com/weather/api)
* [hapi.js](https://github.com/hapijs/)
  * [wreck](https://github.com/hapijs/wreck)
  * [catbox](https://github.com/hapijs/catbox)
  * [catbox-redis](https://github.com/hapijs/catbox-redis)
