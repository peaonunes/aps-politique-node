import PartnerCompany = require("../entities/PartnerCompany");

interface IRepositoryPartnerCompany {

	insertPartnerCompany(partnerCompany: PartnerCompany, callback: (err: any, result?: Object, affected?: number) => void): void;
	removePartnerCompany(partnerCompany: PartnerCompany): boolean;
	updatePartnerCompany(partnerCompany: PartnerCompany): boolean;
	getPartnerCompany(partnerCompany: PartnerCompany): PartnerCompany;

}

export = IRepositoryPartnerCompany;