import TEMPLATE_NAMES = require('../utils/TemplateNames');
import Facade = require('../model/Facade');

class SearchPartnerCompaniesController {
	private facade: Facade;

    public constructor() {
        this.facade = Facade.getInstance();
    }

    public searchCompanies = (request, reply) => {
        var processedQuery = {};

        for (var key in request.query) {
            if (request.query.hasOwnProperty(key)) {
                if (typeof request.query[key] === 'string') {
                    processedQuery[key] = { '$regex': new RegExp(`.*${request.query[key]}.*`, 'i') }
                } else if (key === 'address') {
                    for (var key2 in request.query[key]) {
                        if (typeof request.query[key][key2] === 'string') {
                            processedQuery[key + '.' + key2] = { '$regex': new RegExp(`.*${request.query[key][key2]}.*`, 'i') }
                        }
                    }
                }
            }
        }

        this.facade.getPartnerCompanies(processedQuery, (err, companies) => {
            reply.view(TEMPLATE_NAMES.SEARCH_COMPANY, { 'companies': companies });
        });
    }
}

export = SearchPartnerCompaniesController;