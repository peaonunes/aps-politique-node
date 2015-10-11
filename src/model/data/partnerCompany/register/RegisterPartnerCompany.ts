import IRepositoryPartnerCompany = require("../repository/IRepositoryPartnerCompany");
import PartnerCompany = require("../entities/PartnerCompany");

class RegisterPartnerCompany {

	repository: IRepositoryPartnerCompany;

	constructor(repository: IRepositoryPartnerCompany) {
		this.repository = repository;
	}

	insertPartnerCompany(partnerCompany: PartnerCompany, callback: (err: any, result?: Object, affected?: number) => void) : void {
		return this.repository.insertPartnerCompany(partnerCompany, callback);
	}

	removePartnerCompany(partnerCompany: PartnerCompany) {
		return this.repository.removePartnerCompany(partnerCompany);
	}

	updatePartnerCompany(partnerCompany: PartnerCompany) {
		return this.repository.updatePartnerCompany(partnerCompany);
	}

	getPartnerCompany(partnerCompany: PartnerCompany) {
		return this.repository.getPartnerCompany(partnerCompany);
	}

}

export = RegisterPartnerCompany;