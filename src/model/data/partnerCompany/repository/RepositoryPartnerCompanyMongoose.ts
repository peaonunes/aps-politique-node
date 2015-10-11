//<reference path='../../database/mongodb/mongoose.d.ts'/>

import Mongoose = require('mongoose');

import IRepositoryPartnerCompany = require('./IRepositoryPartnerCompany');
import PartnerCompany = require('../entities/PartnerCompany');

var PartnerCompanyModel = Mongoose.model('PartnerCompanies');

class RepositoryPartnerCompanyMongoose implements IRepositoryPartnerCompany {
    public insertPartnerCompany(partnerCompany:PartnerCompany, callback: <T extends Mongoose.Document>(err: any, result?: T, affected?: number) => void): void {
        var serializedCompany = new PartnerCompanyModel(PartnerCompanyModel.dehydrate(partnerCompany));

        serializedCompany.save(callback);
    }

    public removePartnerCompany(partnerCompany:PartnerCompany):boolean {
        return undefined;
    }

    public updatePartnerCompany(partnerCompany:PartnerCompany):boolean {
        return undefined;
    }

    public getPartnerCompany(partnerCompany:PartnerCompany):PartnerCompany {
        return undefined;
    }
}

export = RepositoryPartnerCompanyMongoose;