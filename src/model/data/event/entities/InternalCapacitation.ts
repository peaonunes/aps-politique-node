import Event = require("./Event");

class InternalCapacitation extends Event{

	stuff : string;

	constructor(name : string, date : Date, feedback : string, stuff : string){
		super(name, date, feedback);
		this.stuff = stuff;
	}

}

export = InternalCapacitation;