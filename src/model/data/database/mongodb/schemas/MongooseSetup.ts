import Mongoose = require('mongoose');
import PartnerCompanySchema = require('./PartnerCompanySchema');

function setup(dbAddress: string): void {
    Mongoose.connect(dbAddress);
    var dbConnection = Mongoose.connection;

    dbConnection.on('error', console.error.bind(console, 'connection error:'));
    dbConnection.once('open', function(callback) {
        console.log(`Successfully connected to database at ${dbAddress}.`);

        Mongoose.model('PartnerCompanies', PartnerCompanySchema);
    });
}

export = setup;

