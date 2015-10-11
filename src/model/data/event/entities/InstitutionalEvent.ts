import Event = require("./Event");

class InstitutionalEvent extends Event{

	price : number;
	sponsorshipReason : string;

	constructor(name : string, date : Date, feedback : string, price : number, sponsorshipReason : string){
		super(name, date, feedback);
		this.price = price;
		this.sponsorshipReason = sponsorshipReason;
	}

}

export = InstitutionalEvent;