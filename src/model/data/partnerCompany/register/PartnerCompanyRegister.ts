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

	public updatePartnerCompany(partnerCompany: PartnerCompany, callback: (err: any, result?: Object) => void) : void {
		this.repository.updatePartnerCompany(partnerCompany, callback);
	}

	public getPartnerCompanies(callback: (err: any, docs: Object[]) => void): void {
		return this.repository.getPartnerCompanies(callback);
	}

}

export = PartnerCompanyRegister;