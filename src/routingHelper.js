routes = [
  {
    method: 'GET',
    path: '/',
    controller: "homeController",
    name: "home"
  },
  {
    method: 'GET',
    path: '/login',
    controller: "authenticationController",
    name: "login"
  },
  {
    method: 'GET',
    path: '/logout',
    controller: "authenticationController",
    name: "logout"
  },
  {
    method: 'GET',
    path: '/profile',
    controller: "profileController",
    name: "profile"
  },
  {
    method: 'GET',
    path: '/companies/new',
    controller: "newPartnerCompanyController",
    name: "newPartnerCompany"
  },
  {
    method: 'GET',
    path: '/events/new',
    controller: "newEventController",
    name: "newEvent"
  },
  {
    method: 'GET',
    path: '/members/new',
    controller: "newMemberController",
    name: "newMember"
  },
  {
    method: 'GET',
    path: '/companies/search',
    controller: "searchPartnerCompaniesController",
    name: "searchCompanies"
  },
  {
    method: 'GET',
    path: '/events/search',
    controller: "searchEventsController",
    name: "searchEvents"
  },
  {
    method: 'GET',
    path: '/members/search',
    controller: "searchMembersController",
    name: "searchMembers"
  },
  {
    method: 'POST',
    path: '/companies/new',
    controller: "newPartnerCompanyController",
    name: 'newPartnerCompanyPOST'
  },
  {
    method: 'GET',
    path: '/findAddress/{zip}',
    controller: "findAddressController",
    name: 'findAddress'
  }
];

function setupRoute(server, route, controllers) {
  var controller = controllers[route.controller];

  if (controller) {
    server.route({
      method: route.method,
      path: route.path,
      handler: controller[route.name]
    });
  } else {
    console.error(`Warning: route ${route.name} could not be setup because the controller ${route.controller} doesn't exist.`);
  }
}

module.exports = {
  routes,
  setupRoute
};