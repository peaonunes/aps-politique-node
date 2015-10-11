import PartnerCompany = require("../entities/PartnerCompany");

interface IPartnerCompanyRepository {
	
	insertPartnerCompany(partnerCompany: PartnerCompany): boolean;
	removePartnerCompany(partnerCompany: PartnerCompany): boolean;
	updatesPartnerCompany(partnerCompany: PartnerCompany): boolean;
	getPartnerCompany(partnerCompany: PartnerCompany): PartnerCompany;

}

export = IPartnerCompanyRepository;