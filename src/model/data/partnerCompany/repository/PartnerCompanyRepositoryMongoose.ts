import IPartnerCompanyRepository = require("./IPartnerCompanyRepository");
import PartnerCompany = require("../entities/PartnerCompany");

// STUB IMPLEMENTATION
class PartnerCompanyRepositoryMongoose implements IPartnerCompanyRepository {

	public insertPartnerCompany(partnerCompany: PartnerCompany) { return true;}
	public removePartnerCompany(partnerCompany: PartnerCompany) {  return true;}
	public updatesPartnerCompany(partnerCompany: PartnerCompany) {  return true;}
	public getPartnerCompany(partnerCompany: PartnerCompany) {  return null;}

}

export = PartnerCompanyRepositoryMongoose;