var Controller = require('./controllers/Controller');

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

  // Regular routes for the application
  server.route({
    method: 'GET',
    path: '/',
    handler: controller.home
  });

  server.route({
    method: 'GET',
    path: '/login',
    handler: controller.home // TODO: criar o método no controller
  });

  server.route({
    method: 'GET',
    path: '/logout',
    handler: controller.home // TODO: criar o método no controller
  });

  server.route({
    method: 'GET',
    path: '/profile',
    handler: controller.home // TODO: criar o método no controller
  });

  server.route({
    method: 'GET',
    path: '/companies/new',
    handler: controller.home // TODO: criar o método no controller
  });

  server.route({
    method: 'GET',
    path: '/companies/search',
    handler: controller.home // TODO: criar o método no controller
  });
}

module.exports = {
	configureRoutes
};
