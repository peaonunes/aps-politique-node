import IPartnerCompanyRepository = require("../partnerCompany/repository/IPartnerCompanyRepository");

abstract class RepositoryBaseFactory {

	abstract createRepositoryPartnerCompany(): IPartnerCompanyRepository;
	// TODO: Others repositories
}

export = RepositoryBaseFactory;