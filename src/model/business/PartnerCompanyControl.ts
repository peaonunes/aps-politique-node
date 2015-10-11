import PartnerCompanyRegister = require("../data/partnerCompany/register/PartnerCompanyRegister");
import PartnerCompany = require("../data/partnerCompany/entities/PartnerCompany");
import IPartnerCompanyRepository = require("../data/partnerCompany/repository/IPartnerCompanyRepository");

class PartnerCompanyControl {

	registerPartnerCompany: PartnerCompanyRegister;

	public constructor(repository: IPartnerCompanyRepository) {
		this.registerPartnerCompany = new PartnerCompanyRegister(repository);
	}

	public insertPartnerCompany(partnerCompany: PartnerCompany) {
		return this.registerPartnerCompany.insertPartnerCompany(partnerCompany);
	}

	public removePartnerCompany(partnerCompany: PartnerCompany) {
		return this.registerPartnerCompany.removePartnerCompany(partnerCompany);
	}

	public updatePartnerCompany(partnerCompany: PartnerCompany) {
		return this.registerPartnerCompany.updatePartnerCompany(partnerCompany);
	}

	public getPartnerCompany(partnerCompany: PartnerCompany) {
		partnerCompany = this.registerPartnerCompany.getPartnerCompany(partnerCompany);
		if(partnerCompany != null){
			return partnerCompany;
		} else {
			// TODO: do something
		}
	}

}

export = PartnerCompanyControl;