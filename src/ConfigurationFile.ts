import ERepositoryType = require("./model/data/utils/ERepositoryType");
import EAddressFinderSubsystemType = require("./model/subsystems/EAddressFinderSubsystemType");

export module ConfigurationFile {
	export const Configuration = {
		DATABASE: ERepositoryType.ERepositoryType.ERepositoryType.mongoose,
		ADDRESSFINDER: EAddressFinderSubsystemType.EAddressFinderSubsystemType.EAddressFinderSubsystemType.correios
	}
}
