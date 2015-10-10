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
}

module.exports = {
	configureRoutes
};
