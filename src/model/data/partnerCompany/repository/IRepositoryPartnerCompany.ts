import PartnerCompany = require("../entities/PartnerCompany");

interface IRepositoryPartnerCompany{
	
	insertPartnerCompany(partnerCompany: PartnerCompany): boolean;
	removePartnerCompany(partnerCompany: PartnerCompany): boolean;
	updatesPartnerCompany(partnerCompany: PartnerCompany): boolean;
	getPartnerCompany(partnerCompany: PartnerCompany): PartnerCompany;

}

export = IRepositoryPartnerCompany;