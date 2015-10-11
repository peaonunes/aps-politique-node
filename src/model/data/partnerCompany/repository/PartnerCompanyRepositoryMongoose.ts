//<reference path='../../database/mongodb/mongoose.d.ts'/>

import Mongoose = require('mongoose');

import IPartnerCompanyRepository = require('./IPartnerCompanyRepository');
import PartnerCompany = require('../entities/PartnerCompany');

var PartnerCompanyModel = Mongoose.model('PartnerCompanies');

class PartnerCompanyRepositoryMongoose implements IPartnerCompanyRepository {

	public insertPartnerCompany(partnerCompany:PartnerCompany, callback: <T extends Mongoose.Document>(err: any, result?: T, affected?: number) => void): void {
		var serializedCompany = new PartnerCompanyModel(PartnerCompanyModel.dehydrate(partnerCompany));

		serializedCompany.save(callback);
	}

	public removePartnerCompany(partnerCompany:PartnerCompany, callback: (err: any) => void) : void {
		PartnerCompanyModel.remove({ _id : partnerCompany.id }, callback);
	}

	public updatePartnerCompany(partnerCompany:PartnerCompany) : boolean {
		return undefined;
	}

	public getPartnerCompany(partnerCompany:PartnerCompany):PartnerCompany {
		return undefined;
	}

}

export = PartnerCompanyRepositoryMongoose;