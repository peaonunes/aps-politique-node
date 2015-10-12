// <reference path='../model/data/database/mongodb/mongoose.d.ts'/>

import Mongoose = require('mongoose');

import Facade = require('../model/Facade');
import ERepositoryType = require("../model/data/utils/ERepositoryType");

var PartnerCompanyModel = Mongoose.model('PartnerCompanies');

const TEMPLATE_NAMES = {
    HOME : 'home',
    NEW_COMPANY: 'cadastrarEmpresa'
};

class Controller {
    private facade: Facade;

    constructor() {
        this.facade = new Facade(ERepositoryType.ERepositoryType.ERepositoryType.mongoose);
    }

    public home(request, reply) : void {
        reply.view(TEMPLATE_NAMES.HOME);
    }

    public newPartnerCompany(request, reply) : void {
        reply.view(TEMPLATE_NAMES.NEW_COMPANY);
    }

    public newPartnerCompanyPOST(request, reply) : void {
        var partnerCompany = PartnerCompanyModel.hydrateFromPlainObject(request.payload);

        this.facade.insertPartnerCompany(partnerCompany, (err, object) => {
            if (err) throw err;

            // TODO: mudar o template para o qual o usuário será redirecionado ao registrar a empresa
            reply.view(TEMPLATE_NAMES.NEW_COMPANY);
        });
    }

    public login(request, reply) : void {
        reply('login');
    }

    public logout(request, reply) : void {
        reply('logout');
    }

    public profile(request, reply) : void {
        reply('profile');
    }

    public searchCompanies(request, reply) : void {
        reply('search for companies');
    }
}

export = Controller;
