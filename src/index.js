var Hapi = require('hapi');
var router = require('./routes.js');

var server = new Hapi.Server();
server.connection({ port: 3000 });

router.configureRoutes(server);

server.start(function () {
	console.log('Server running at:', server.info.uri);
});
