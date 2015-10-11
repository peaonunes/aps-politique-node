import Event = require("./Event");

class ExternalCapacitation extends Event{

	price : number;
	lecturer : string;

	constructor(name : string, date : Date, feedback : string, price : number, lecturer : string){
		super(name, date, feedback);
		this.price = price;
		this.lecturer = lecturer;
	}

}

export = ExternalCapacitation;