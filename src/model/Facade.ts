import PartnerCompanyControl = require("./business/PartnerCompanyControl");
import IRepositoryPartnerCompany = require("./data/partnerCompany/repository/IRepositoryPartnerCompany");
import ERepositoryType = require("./data/utils/ERepositoryType");

class Facade {

	// Controls of the model application
	partnerCompanyControl: PartnerCompanyControl;

	// Repositories of the objects
	repositoryPartnerCompany: IRepositoryPartnerCompany;

	constructor(repositoryType: ERepositoryType.ERepositoryType.ERepositoryType){
		this.init(repositoryType);
	}

	// ###################################################################################
	// ###############################SETUP ACTIONS#######################################
	// ###################################################################################
	
	// Setup all the contols and repositories 
	private init(repositoryType: ERepositoryType.ERepositoryType.ERepositoryType){
		//Repository type
		this.createRepositories(repositoryType);
		this.createControls();
	}

	private createRepositories(repositoryType: ERepositoryType.ERepositoryType.ERepositoryType){
		// TODO: Use the RepositoryMongooseFactory to create the repositories
		switch (repositoryType) {  
			case ERepositoryType.ERepositoryType.ERepositoryType.mongoose:  
		        // TODO: CREATE SPECIALIZED REPO  
			    break;   
			case ERepositoryType.ERepositoryType.ERepositoryType.memory:  
				// TODO: CREATE SPECIALIZED REPO   
				break;   
		}
	}

	private createControls(){
		// TODO: Create the controls of the application. We should give de repositories here.
		this.partnerCompanyControl = new PartnerCompanyControl(this.repositoryPartnerCompany);
	}

	// ###################################################################################
	// ###############################METHODS CONTROL#####################################
	// ###################################################################################

	//TODO:
}

export = Facade;