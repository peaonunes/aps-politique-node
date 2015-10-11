import RegisterPartnerCompany = require("../data/partnerCompany/register/RegisterPartnerCompany");
import PartnerCompany = require("../data/partnerCompany/entities/PartnerCompany");
import IRepositoryPartnerCompany = require("../data/partnerCompany/repository/IRepositoryPartnerCompany");

class PartnerCompanyControl {

	registerPartnerCompany: RegisterPartnerCompany;

	constructor(repository: IRepositoryPartnerCompany) {
		this.registerPartnerCompany = new RegisterPartnerCompany(repository);
	}

	insertPartnerCompany(partnerCompany: PartnerCompany) {
		return this.registerPartnerCompany.insertPartnerCompany(partnerCompany);
	}

	removePartnerCompany(partnerCompany: PartnerCompany) {
		return this.registerPartnerCompany.removePartnerCompany(partnerCompany);
	}

	updatePartnerCompany(partnerCompany: PartnerCompany) {
		return this.registerPartnerCompany.updatePartnerCompany(partnerCompany);
	}

	getPartnerCompany(partnerCompany: PartnerCompany) {
		partnerCompany = this.registerPartnerCompany.getPartnerCompany(partnerCompany);
		if(partnerCompany != null){
			return partnerCompany;
		} else {
			// TODO: do something
		}
	}

}

export = PartnerCompanyControl;