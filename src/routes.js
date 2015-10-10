var Controller = require('./controllers/Controller');

var controller = new Controller();

function configureRoutes(server) {
	server.route({
		method: 'GET',
		path: '/',
		handler: controller.home
	});
}

module.exports = {
	configureRoutes
};
