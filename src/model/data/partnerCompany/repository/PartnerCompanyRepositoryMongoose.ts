//<reference path='../../database/mongodb/mongoose.d.ts'/>

import Mongoose = require('mongoose');

import IPartnerCompanyRepository = require('./IPartnerCompanyRepository');
import PartnerCompany = require('../entities/PartnerCompany');
import Query = require("../../common/Query")

var PartnerCompanyModel = Mongoose.model('PartnerCompanies');

class PartnerCompanyRepositoryMongoose implements IPartnerCompanyRepository {

	public insertPartnerCompany(partnerCompany:PartnerCompany, callback: <T extends Mongoose.Document>(err: any, result?: T, affected?: number) => void): void {
		var serializedCompany = new PartnerCompanyModel(PartnerCompanyModel.dehydrate(partnerCompany));

		serializedCompany.save(callback);
	}

	public removePartnerCompany(partnerCompany:PartnerCompany, callback: (err: any) => void) : void {
		PartnerCompanyModel.remove({ _id : partnerCompany.id }, callback);
	}

	public updatePartnerCompany(partnerCompany:PartnerCompany, callback: <T extends Mongoose.Document>(err: any, result?: T) => void) : void {
		var serializedCompany = PartnerCompanyModel.dehydrate(partnerCompany);
		delete serializedCompany._id;

        PartnerCompanyModel.findByIdAndUpdate(partnerCompany.id, { $set : serializedCompany }, callback);
	}

	public getPartnerCompanies(query : Query , callback: <T extends Mongoose.Document>(err: any, docs: T[]) => void) : void {
		var actQuery;
		if (!query){
			actQuery = {};
		} else {
			actQuery = query.dict;
		}
		PartnerCompanyModel.find(actQuery, callback);
	}

}

export = PartnerCompanyRepositoryMongoose;