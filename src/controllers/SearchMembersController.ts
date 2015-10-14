import TEMPLATE_NAMES = require('../utils/TemplateNames');

class SearchMembersController {
    public searchMembers(request, reply) : void {
        reply(TEMPLATE_NAMES.SEARCH_EVENT);
    }
}

export = SearchMembersController;