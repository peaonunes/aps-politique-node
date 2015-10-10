var Hapi = require('hapi');
var Good = require('good');
var GoodConsole = require('good-console');
var Vision = require('vision');
var Handlebars = require('handlebars');
var HandlebarsLayouts = require('handlebars-layouts');

var router = require('./routes.js');

var engine = Handlebars.create();
HandlebarsLayouts.register(engine);

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.register(Vision, function(err) {
  if (err) throw err;

  server.views({
    engines: {
      html: engine
    },
    relativeTo: __dirname,
    path: '../templates/pages',
    partialsPath: '../templates/layouts'
  });
});

server.register({
  register: Good,
  options: {
    reporters: [{
      reporter: GoodConsole,
      events: {
        response: '*',
        log: '*'
      }
    }]
  }
}, function(err) {
  if (err) throw err;

  server.start(function () {
  	console.log('Server running at:', server.info.uri);
  });
});

router.configureRoutes(server);
