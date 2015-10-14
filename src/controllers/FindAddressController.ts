import Facade = require('../model/Facade');

class FindAddressController {
    private facade: Facade;

    constructor() {
        this.facade = Facade.getInstance();
    }

    public findAddress = (request, reply) => {
        var zipCode = request.params.zip;

        this.facade.findAddress(zipCode, (err, address) => {
            if (err) throw err;

            reply(address);
        });
    }
}

export = FindAddressController;