import PartnerCompany = require("../entities/PartnerCompany");

interface IPartnerCompanyRepository {
	
	insertPartnerCompany(partnerCompany: PartnerCompany, callback: (err: any, result?: Object, affected?: number) => void): void;
	removePartnerCompany(partnerCompany: PartnerCompany, callback: (err: any) => void): void;
	updatePartnerCompany(partnerCompany: PartnerCompany): boolean;
	getPartnerCompany(partnerCompany: PartnerCompany): PartnerCompany;

}

export = IPartnerCompanyRepository;