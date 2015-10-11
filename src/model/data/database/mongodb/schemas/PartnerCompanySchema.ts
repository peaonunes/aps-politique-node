//<reference path='../mongoose.d.ts' />

import Mongoose = require('mongoose');

import PartnerCompany = require('../../../partnerCompany/entities/PartnerCompany');
import Address = require('../../../common/Address');

var Schema = Mongoose.Schema;

var PartnerCompanySchema = new Schema({
    name: { required: true, type: String },
    branch: { required: true, type: String },
    background: { required: true, type: String },
    support: { required: true, type: String },
    supportProposal: { required: true, type: String },
    partnershipType: { required: true, type: String },
    address: {
        required: true,
        type: {
            street: { required: true, type: String },
            num: { required: true, type: Number },
            neighborhood: { required: true, type: String },
            city: { required: true, type: String },
            state: { required: true, type: String },
            zip: { required: true, type: String },
        }
    }
});

PartnerCompanySchema.methods.hydrate = function() : PartnerCompany {
    var address = new Address(
        this.address.street,
        this.address.num,
        this.address.neighborhood,
        this.address.city,
        this.address.state,
        this.address.zip
    );

    var company = new PartnerCompany(
        this.name,
        this.branch,
        this.background,
        this.support,
        this.supportProposal,
        this.partnershipType,
        address
    );

    return company;
};

PartnerCompanySchema.statics.dehydrate = function(company: PartnerCompany) : Object {
    return {
        name: company.name,
        branch: company.branch,
        background: company.background,
        support: company.support,
        supportProposal: company.supportProposal,
        partnershipType: company.partnershipType,
        address: {
            street: company.address.street,
            num: company.address.num,
            neighborhood: company.address.neighborhood,
            city: company.address.city,
            state: company.address.state,
            zip: company.address.zip
        }
    };
};

export = PartnerCompanySchema;