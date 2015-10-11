import Address = require("../../common/Address");
//var mongoose = require('mongoose');


// Class
class PartnerCompany {

	name : string;
	branch : string;
	background : string;
	support : string;
	supportProposal : string;
	partnershipType : string;
	address : Address;

	constructor(name : string, branch : string, background : string, support : string, supportProposal : string, partnershipType : string, address : Address){
		this.name = name;
		this.branch = branch;
		this.background = background;
		this.support = support;
		this.supportProposal = supportProposal;
		this.partnershipType = partnershipType;
		this.address = address;
	}

}
/*
// Schema 
var PartnerCompanySchema = new mongoose.Schema({

	name: { required: true, type: String },
	branch: { required: true, type: String },
	background: { required: true, type: String },
	support: { required: true, type: String }, 
	support_proposal: { required: true, type: String },
	partnershipType: { required: true, type: String },
	address: { required: true, type: Address}

})

// Interface for the mongoose
//export interface PartnerCompanyDocument extends PartnerCompany, mongoose.Document { }

// Model
//export var PartnerCompanyModel = mongoose.model<PartnerCompanyDocument>('PartnerCompany', schema)
*/
// Export Class
export = PartnerCompany;