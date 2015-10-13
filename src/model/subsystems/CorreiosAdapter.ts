import IAddressFinder = require("./IAddressFinder");
import Address = require("../data/common/Address");
import CorreiosMiddleware = require("./correiosMiddleware/CorreiosMiddleware");

class CorreiosAdapter implements IAddressFinder {

	public constructor() { }

	public findAddress(zip: string, callback: (err: any, address: Address) => void): void {
		CorreiosMiddleware.findAddress(zip, (err: any, data: string) => {
			if (err) callback(err, null);

			var rawAddress = JSON.parse(data);
			var address = new Address(
				rawAddress.logradouro,
				0,
				rawAddress.bairro,
				rawAddress.localidade,
				rawAddress.uf,
				rawAddress.cep);
			callback(null, address);
		});
	}
}

export = CorreiosAdapter;