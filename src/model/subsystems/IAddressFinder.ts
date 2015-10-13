import Address = require("../data/common/Address");

interface IAddressFinder {
	findAddress(zip: string, callback: (err: any, address: Address) => void): void;
}

export = IAddressFinder;