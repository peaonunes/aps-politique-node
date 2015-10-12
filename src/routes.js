var Controller = require('./controllers/Controller');
var routingHelper = require('./routingHelper');

var routes = routingHelper.routes;
var setupRoute = routingHelper.setupRoute;
var controller = new Controller();

function configureRoutes(server) {
  // Route configuration for static files
  server.route({
    method: 'GET',
    path: '/static/{filepath*}',
    handler: {
      file(request) {
        return request.params.filepath;
      }
    }
  });

  for (var i = 0; i < routes.length; i++) {
    setupRoute(server, routes[i], controller);
  }
}

module.exports = {
	configureRoutes
};
