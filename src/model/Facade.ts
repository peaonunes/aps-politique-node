import PartnerCompanyControl = require("./business/PartnerCompanyControl");
import PartnerCompany = require('./data/partnerCompany/entities/PartnerCompany');
import IPartnerCompanyRepository = require("./data/partnerCompany/repository/IPartnerCompanyRepository");
import ERepositoryType = require("./data/utils/ERepositoryType");
import RepositoryBaseFactory = require("./data/utils/RepositoryBaseFactory");
import RepositoryMongooseFactory = require("./data/utils/RepositoryMongooseFactory");
import IAddressFinder = require("./subsystems/IAddressFinder");
import EAddressFinderSubsystemType = require("./subsystems/EAddressFinderSubsystemType");
import CorreriosAdapter = require("./subsystems/CorreiosAdapter");
import Address = require("./data/common/Address");
import ConfigurationFile = require("../ConfigurationFile");

class Facade {
	//singleton instance
	private static instance: Facade;

	// Address Finder Subsystem
	private addressFinderSubsystem: IAddressFinder;

	// Controls of the model application
	private partnerCompanyControl: PartnerCompanyControl;

	constructor(){
		this.init();
	}

	public static getInstance() {
		if (!Facade.instance) {
			Facade.instance = new Facade();
		}

		return Facade.instance;
	}

	// ###################################################################################
	// ###############################SETUP ACTIONS#######################################
	// ###################################################################################
	
	// Setup all the contols and repositories 
	private init(){
		var repostitoryFactory = this.createRepositoryFactory(ConfigurationFile.ConfigurationFile.Configuration.DATABASE);
		this.addressFinderSubsystem = this.createAddressFinderSubsystem(ConfigurationFile.ConfigurationFile.Configuration.ADDRESSFINDER);
		this.createControls(repostitoryFactory);
	}

	private createRepositoryFactory(repositoryType: ERepositoryType.ERepositoryType.ERepositoryType){
		switch (repositoryType) {  
			case ERepositoryType.ERepositoryType.ERepositoryType.mongoose:  
				return new RepositoryMongooseFactory();
			    break;
			case ERepositoryType.ERepositoryType.ERepositoryType.memory:  
				return null;
				break;
		}
	}

	private createAddressFinderSubsystem(addressFinderType: EAddressFinderSubsystemType.EAddressFinderSubsystemType.EAddressFinderSubsystemType){
		switch(addressFinderType){
			case EAddressFinderSubsystemType.EAddressFinderSubsystemType.EAddressFinderSubsystemType.correios:
				return new CorreriosAdapter();
				break;
			case EAddressFinderSubsystemType.EAddressFinderSubsystemType.EAddressFinderSubsystemType.unknow:
				return null;
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
	public insertPartnerCompany(company: PartnerCompany, callback: (err: any, company: Object) => void) : void {
		this.partnerCompanyControl.insertPartnerCompany(company, callback);
	}

    public removePartnerCompany(company: PartnerCompany, callback: (err: any) => void) : void {
        this.partnerCompanyControl.removePartnerCompany(company, callback);
    }

    public updatePartnerCompany(company: PartnerCompany, callback: (err: any, company: Object) => void) : void {
        this.partnerCompanyControl.updatePartnerCompany(company, callback)
    }

    public getPartnerCompanies(callback: (err: any, companies: Object[]) => void) : void {
        this.partnerCompanyControl.getPartnerCompanies(callback);
    }

    public findAddress(zip: string, callback: (err: any, address: Address) => void): void {
		this.addressFinderSubsystem.findAddress(zip, callback);
    }

}

export = Facade;