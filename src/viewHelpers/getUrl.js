var routingHelper = require('../routingHelper');

module.exports = function(urlName) {
  var routes = routingHelper.routes;

  for (var i = 0; i < routes.length; i++) {
    if (urlName === routes[i].name) {
      return routes[i].path;
    }
  }

  throw new Error(`Route not found: ${urlName}.`);
};