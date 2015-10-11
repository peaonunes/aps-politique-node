import Address = require("../../common/Address");
//var mongoose = require('mongoose');


// Class
class PartnerCompany {

    id: string;
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

export = PartnerCompany;
