
let PI = Math.PI

//studentLocation = "School-Ground"
studentLocation = "Lab-D05"

const student = {
	fname:"Monica",
	lname:"Geller",
	email:"m.geller@friendsmail.com",

	//function
	getAttendace(){},

	//arrow function
	getAttendace2: ()=>{},

	/* 
	this is a dynamic propery

	Dynamic properties : when you have a highly dynamic value as key, 
	you can use dynamic propertie

	if you are using dynamic properties you have to 
	declare 'studentLocation' before use */
	[studentLocation]:"available", 

	// it looks like its only a key
	// but this is same as PI: value of PI
	PI 
}

//print student object
console.log(student)