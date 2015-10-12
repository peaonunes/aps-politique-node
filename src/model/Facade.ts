import PartnerCompanyControl = require("./business/PartnerCompanyControl");
import PartnerCompany = require('./data/partnerCompany/entities/PartnerCompany');
import IPartnerCompanyRepository = require("./data/partnerCompany/repository/IPartnerCompanyRepository");
import ERepositoryType = require("./data/utils/ERepositoryType");
import RepositoryBaseFactory = require("./data/utils/RepositoryBaseFactory");
import RepositoryMongooseFactory = require("./data/utils/RepositoryMongooseFactory");

class Facade {

	// Controls of the model application
	partnerCompanyControl: PartnerCompanyControl;

	public constructor(repositoryType: ERepositoryType.ERepositoryType.ERepositoryType){
		this.init(repositoryType);
	}

	// ###################################################################################
	// ###############################SETUP ACTIONS#######################################
	// ###################################################################################
	
	// Setup all the contols and repositories 
	private init(repositoryType: ERepositoryType.ERepositoryType.ERepositoryType){
		var repostitoryFactory = this.createRepositoryFactory(repositoryType);
		this.createControls(repostitoryFactory);
	}

	private createRepositoryFactory(repositoryType: ERepositoryType.ERepositoryType.ERepositoryType){
		switch (repositoryType) {  
			case ERepositoryType.ERepositoryType.ERepositoryType.mongoose:  
				return new RepositoryMongooseFactory();
			    break;
			case ERepositoryType.ERepositoryType.ERepositoryType.memory:  
				// TODO: ... 
				break;
		}
	}

	private createControls(repositoryFactory: RepositoryBaseFactory){
		// TODO: Create the controls of the application. We should give de repositories here.
		this.partnerCompanyControl = new PartnerCompanyControl(
			repositoryFactory.createRepositoryPartnerCompany()
			);
	}

	// ###################################################################################
	// ###############################METHODS CONTROL#####################################
	// ###################################################################################

	//TODO:
	public insertPartnerCompany(callback: (err: any, company: Object) => void) : void {
		var company: PartnerCompany;

		this.partnerCompanyControl.insertPartnerCompany(company, callback);
	}
}

export = Facade;