//parent class
class Student{
	// notice there is no local	variable
	constructor(fname, lname){
		this.fname = fname;
		this.lname = lname;
	}
	
	printDetails = ()=> console.log(`Full name of the student: ${this.fname} ${this.lname}` )
}

// child class
class SeniorStudent extends Student{
	constructor(firstName, lastName, specialization ){
		//passed to the constructor of parent class
		super(firstName, lastName);
		this.specialization = specialization
	}
		
	printDetails = ()=> {
		console.log(`${this.fname} ${this.lname} follows the ${this.specialization} specialization` )
	}
}

const s1 = new Student("Monica", "Geller")
const s2 = new SeniorStudent("Ross", "Geller", "Computer Science")

s1.printDetails()
s2.printDetails()

//override
s1.printDetails = ()=> console.log("This is how to override")
s1.printDetails()