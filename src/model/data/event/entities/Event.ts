class Event {

	name : string;
	date : Date;
	feedback : string;

	constructor(name : string, date : Date, feedback : string){
		this.name = name;
		this.date = date;
		this.feedback = feedback;
	}

}

export = Event;