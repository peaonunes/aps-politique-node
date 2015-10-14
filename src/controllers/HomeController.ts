import TEMPLATE_NAMES = require('../utils/TemplateNames');

class HomeController {
    public home(request, reply) : void {
        reply.view(TEMPLATE_NAMES.HOME);
    }
}

export = HomeController;