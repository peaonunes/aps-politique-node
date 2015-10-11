import IRepositoryPartnerCompany = require("../repository/IRepositoryPartnerCompany");
import PartnerCompany = require("../entities/PartnerCompany");

class RegisterPartnerCompany {

	repository: IRepositoryPartnerCompany;

	constructor(repository: IRepositoryPartnerCompany) {
		this.repository = repository;
	}

	insertPartnerCompany(partnerCompany: PartnerCompany) {
		return this.repository.insertPartnerCompany(partnerCompany);
	}

	removePartnerCompany(partnerCompany: PartnerCompany) {
		return this.repository.removePartnerCompany(partnerCompany);
	}

	updatePartnerCompany(partnerCompany: PartnerCompany) {
		return this.repository.updatesPartnerCompany(partnerCompany);
	}

	getPartnerCompany(partnerCompany: PartnerCompany) {
		return this.repository.getPartnerCompany(partnerCompany);
	}

}

export = RegisterPartnerCompany;