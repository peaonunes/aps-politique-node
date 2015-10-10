var Hapi = require('hapi');
var Good = require('good');
var GoodConsole = require('good-console');
var Vision = require('vision');
var Inert = require('inert');
var Handlebars = require('handlebars');
var HandlebarsLayouts = require('handlebars-layouts');
var Path = require('path');

var router = require('./routes.js');

var engine = Handlebars.create();
HandlebarsLayouts.register(engine);

var server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, '../public')
      }
    }
  }
});
server.connection({ port: 3000 });

server.register(Inert, function(err) {
  if (err) throw err;

  server.route({
    method: 'GET',
    path: '/static/{filepath*}',
    handler: {
      file(request) {
        return request.params.filename;
      }
    }
  })
})

server.register(Vision, function(err) {
  if (err) throw err;

  server.views({
    engines: {
      html: engine
    },
    relativeTo: Path.join(__dirname, '../views'),
    path: 'pages',
    partialsPath: 'layouts'
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
