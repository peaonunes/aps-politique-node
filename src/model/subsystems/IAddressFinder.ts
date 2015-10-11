import Address = require("../data/common/Address");

interface IAddressFinder {
	findAddress(zip: string, callback: (address: Address) => void): void;
}

export = IAddressFinder;