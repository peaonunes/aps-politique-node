var Hapi = require('hapi');
var Good = require('good');
var GoodConsole = require('good-console');
var Vision = require('vision');
var Inert = require('inert');
var Handlebars = require('handlebars');
var HandlebarsLayouts = require('handlebars-layouts');
var Path = require('path');
var dbSetup = require('./model/data/database/mongodb/MongooseSetup');

var router = require('./routes.js');

var handlebarsEngine = Handlebars.create();
HandlebarsLayouts.register(handlebarsEngine);

// Auxiliary variables
var staticFilesDir = Path.join(__dirname, '../public');
var baseViewsDir = Path.join(__dirname, '../views');
var dbAddress = 'mongodb://localhost/politique';

// Database connection setup
dbSetup(dbAddress);

// Server initialization
var server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: staticFilesDir
      }
    }
  }
});
server.connection({ port: process.env.PORT || 3000 });

// Plugin for static content serving
server.register(Inert, function(err) {
  if (err) throw err;
});

// Routing configuration
router.configureRoutes(server);

// Templating engine configuration
server.register(Vision, function(err) {
  if (err) throw err;

  server.views({
    engines: {
      html: handlebarsEngine
    },
    relativeTo: baseViewsDir,
    path: 'pages',
    partialsPath: 'layouts',
    helpersPath: '../src/viewHelpers'
  });
});

// Logging configuration
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
  	console.log(`Server running at:, ${server.info.uri}`);
  });
});
