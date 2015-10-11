import PartnerCompanyRegister = require("../data/partnerCompany/register/PartnerCompanyRegister");
import PartnerCompany = require("../data/partnerCompany/entities/PartnerCompany");
import IPartnerCompanyRepository = require("../data/partnerCompany/repository/IPartnerCompanyRepository");

class PartnerCompanyControl {

	partnerCompanyRegister: PartnerCompanyRegister;

	constructor(repository: IPartnerCompanyRepository) {
		this.partnerCompanyRegister = new PartnerCompanyRegister(repository);
	}

	insertPartnerCompany(partnerCompany: PartnerCompany, callback: (err: any, result?: Object, affected?: number) => void) : void {
		return this.partnerCompanyRegister.insertPartnerCompany(partnerCompany, callback);
	}

	removePartnerCompany(partnerCompany: PartnerCompany, callback: (err: any) => void) : void {
		return this.partnerCompanyRegister.removePartnerCompany(partnerCompany, callback);
	}

	updatePartnerCompany(partnerCompany: PartnerCompany) {
		return this.partnerCompanyRegister.updatePartnerCompany(partnerCompany);
	}

	getPartnerCompany(partnerCompany: PartnerCompany) {
		partnerCompany = this.partnerCompanyRegister.getPartnerCompany(partnerCompany);
		if(partnerCompany != null){
			return partnerCompany;
		} else {
			// TODO: do something
		}
	}

}

export = PartnerCompanyControl;