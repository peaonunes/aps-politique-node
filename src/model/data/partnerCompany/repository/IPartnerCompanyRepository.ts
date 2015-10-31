import PartnerCompany = require("../entities/PartnerCompany");
import Query = require("../../common/Query")

interface IPartnerCompanyRepository {
	
	insertPartnerCompany(partnerCompany: PartnerCompany, callback: (err: any, result?: Object, affected?: number) => void): void;
	removePartnerCompany(partnerCompany: PartnerCompany, callback: (err: any) => void): void;
	updatePartnerCompany(partnerCompany: PartnerCompany, callback: (err: any, result?: Object) => void) : void;
	getPartnerCompanies(query : Query, callback: (err: any, docs: Object[]) => void): void;

}

export = IPartnerCompanyRepository;