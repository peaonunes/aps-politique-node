import IPartnerCompanyRepository = require("../repository/IPartnerCompanyRepository");
import PartnerCompany = require("../entities/PartnerCompany");

class PartnerCompanyRegister {

	repository: IPartnerCompanyRepository;

	public constructor(repository: IPartnerCompanyRepository) {
		this.repository = repository;
	}

	public insertPartnerCompany(partnerCompany: PartnerCompany, callback: (err: any, result?: Object, affected?: number) => void) : void {
		this.repository.insertPartnerCompany(partnerCompany, callback);
	}

	public removePartnerCompany(partnerCompany: PartnerCompany, callback: (err: any) => void) : void {
		this.repository.removePartnerCompany(partnerCompany, callback);
	}

	public updatePartnerCompany(partnerCompany: PartnerCompany) {
		return this.repository.updatePartnerCompany(partnerCompany);
	}

	public getPartnerCompany(partnerCompany: PartnerCompany) {
		return this.repository.getPartnerCompany(partnerCompany);
	}

}

export = PartnerCompanyRegister;