import Address = require("../../common/Address");

class PartnerCompany {

	name : string;
	branch : string;
	background : string;
	support : string;
	support_proposal : string;
	partnership_type : string;
	address : Address;

	constructor(name : string, branch : string, background : string, support : string, support_proposal : string, partnership_type : string, address : Address){
		this.name = name;
		this.branch = branch;
		this.background = background;
		this.support = support;
		this.support_proposal = support_proposal;
		this.partnership_type = partnership_type;
		this.address = address;
	}

}

export = PartnerCompany;