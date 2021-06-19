class Employee{
	// notice there is no local	variable
	constructor(name){
		this.name = name;
	}
	
	banner = ()=> console.log(this.name+' is an Employee')
}

class Manager extends Employee{
	constructor(name,section){
		// name is passed directly to parent constructor
		super(name);
		this.section = section
	}
		
	banner = ()=> console.log(this.name+' is an Employee and Manager of '+this.section)
}

const e1 = new Employee("Brian")

const e2 = new Manager("Chris", "QA")

e1.banner()
e2.banner()

//override in calling time
e2.banner = ()=> console.log("This is overridden")
e2.banner()
e2.banner()