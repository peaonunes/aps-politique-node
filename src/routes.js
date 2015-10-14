var FindAddressController = require('./controllers/FindAddressController');
var HomeController = require('./controllers/HomeController');
var NewPartnerCompanyController = require('./controllers/NewPartnerCompanyController');
var NewEventController = require('./controllers/NewEventController');
var NewMemberController = require('./controllers/NewMemberController');
var SearchPartnerCompaniesController = require('./controllers/SearchPartnerCompaniesController');
var SearchEventsController = require('./controllers/SearchEventsController');
var SearchMembersController = require('./controllers/SearchMembersController');
var routingHelper = require('./routingHelper');

var routes = routingHelper.routes;
var setupRoute = routingHelper.setupRoute;

var controllers = {
  homeController : new HomeController(),
  findAddressController : new FindAddressController(),
  newPartnerCompanyController : new NewPartnerCompanyController(),
  newEventController : new NewEventController(),
  newMemberController : new NewMemberController(),
  searchPartnerCompaniesController : new SearchPartnerCompaniesController(),
  searchEventsController : new SearchEventsController(),
  searchMembersController : new SearchMembersController()
};


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
    setupRoute(server, routes[i], controllers);
  }
}

module.exports = {
	configureRoutes
};
