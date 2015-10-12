import PartnerCompanyRegister = require("../data/partnerCompany/register/PartnerCompanyRegister");
import PartnerCompany = require("../data/partnerCompany/entities/PartnerCompany");
import IPartnerCompanyRepository = require("../data/partnerCompany/repository/IPartnerCompanyRepository");

class PartnerCompanyControl {

	partnerCompanyRegister: PartnerCompanyRegister;

	constructor(repository: IPartnerCompanyRepository) {
		this.partnerCompanyRegister = new PartnerCompanyRegister(repository);
	}

	insertPartnerCompany(partnerCompany: PartnerCompany, callback: (err: any, result?: Object, affected?: number) => void) : void {
		this.partnerCompanyRegister.insertPartnerCompany(partnerCompany, callback);
	}

	removePartnerCompany(partnerCompany: PartnerCompany, callback: (err: any) => void) : void {
		this.partnerCompanyRegister.removePartnerCompany(partnerCompany, callback);
	}

	updatePartnerCompany(partnerCompany: PartnerCompany, callback: (err: any, result?: Object) => void) : void {
		this.partnerCompanyRegister.updatePartnerCompany(partnerCompany, callback);
	}

	getPartnerCompanies(callback: (err: any, docs: Object[]) => void): void {
		this.partnerCompanyRegister.getPartnerCompanies(callback);
	}

}

export = PartnerCompanyControl;