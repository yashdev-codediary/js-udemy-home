class College{
	constructor(subject, year){
		this.subject = subject;
		this.year = year;
	}

	info(){
		console.log(`${this.subject} will be in ${this.year}.`);
	}
}

class University extends College{
	constructor(subject, year, marks){
		super(subject, year);
		this.marks = marks;
	}
	info(){
		
		console.log(`Each of marks has ${this.marks}.`);
	}
}

var result = new University("physics and Bio", 2023, [80, 50]);
result.info();



