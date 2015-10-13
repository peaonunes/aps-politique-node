// <reference path='../model/data/database/mongodb/mongoose.d.ts'/>

import Mongoose = require('mongoose');

import Facade = require('../model/Facade');
import ERepositoryType = require("../model/data/utils/ERepositoryType");
import EAddressFinderSubsystemType = require("../model/subsystems/EAddressFinderSubsystemType");


var PartnerCompanyModel = Mongoose.model('PartnerCompanies');

const TEMPLATE_NAMES = {
    HOME : 'home',
    NEW_COMPANY: 'cadastrarEmpresa',
    NEW_MEMBER:'cadastrarMembro',
    NEW_EVENT:'cadastrarEvento',
    SEARCH_COMPANY:'consultarEmpresa',
    SEARCH_MEMBER:'consultarMembro',
    SEARCH_EVENT:'consultarEvento'
};

class Controller {
    private facade: Facade;

    constructor() {
        this.facade = new Facade();
    }

    public home(request, reply) : void {
        reply.view(TEMPLATE_NAMES.HOME);
    }

    public newPartnerCompany(request, reply) : void {
        reply.view(TEMPLATE_NAMES.NEW_COMPANY);
    }

    public newPartnerCompanyPOST = (request, reply) => {
        var partnerCompany = PartnerCompanyModel.hydrateFromPlainObject(request.payload);

        this.facade.insertPartnerCompany(partnerCompany, (err, object) => {
            if (err) throw err;

            // TODO: mudar o template para o qual o usuário será redirecionado ao registrar a empresa
            reply.view(TEMPLATE_NAMES.NEW_COMPANY);
        });
    }

    public newEvent(request, reply) : void{
        reply.view(TEMPLATE_NAMES.NEW_EVENT);
    }

    public newMember(request, reply) : void{
        reply.view(TEMPLATE_NAMES.NEW_MEMBER);
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
        reply(TEMPLATE_NAMES.SEARCH_COMPANY);
    }

    public searchEvents(request, reply) : void {
        reply(TEMPLATE_NAMES.SEARCH_MEMBER);
    }

    public searchMembers(request, reply) : void {
        reply(TEMPLATE_NAMES.SEARCH_EVENT);
    }

}

export = Controller;
