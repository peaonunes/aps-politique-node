import TEMPLATE_NAMES = require('../utils/TemplateNames');

class SearchPartnerCompaniesController {
    public searchCompanies(request, reply) : void {
        reply(TEMPLATE_NAMES.SEARCH_COMPANY);
    }
}

export = SearchPartnerCompaniesController;