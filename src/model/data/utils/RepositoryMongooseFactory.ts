import RepositoryBaseFactory = require("./RepositoryBaseFactory");
import PartnerCompanyRepositoryMongoose = require("../partnerCompany/repository/PartnerCompanyRepositoryMongoose");

class RepositoryMongooseFactory extends RepositoryBaseFactory {

	public createRepositoryPartnerCompany(){
		return new PartnerCompanyRepositoryMongoose();
	}

}

export = RepositoryMongooseFactory;