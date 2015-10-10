class Address {

	street : string;
	num : number;
	neighborhood : string;
	city : string;
	state : string;
	zip : string;
	
	constructor(street : string, num : number, neighborhood : string, city : string, state : string, zip : string) {
        this.street = street;
		this.num = num ;
		this.neighborhood = neighborhood;
		this.city = city;
		this.state = state;
		this.zip = zip;
    }

}

export = Address;