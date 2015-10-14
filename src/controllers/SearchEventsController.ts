import TEMPLATE_NAMES = require('../utils/TemplateNames');

class SearchEventsController {
    public searchEvents(request, reply) : void {
        reply(TEMPLATE_NAMES.SEARCH_MEMBER);
    }
}

export = SearchEventsController;