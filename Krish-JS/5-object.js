//how modern js handle objects
// object is a key value pair
let SQRT2 = Math.SQRT2

/*
	with dynamic properties 
	you can have a placeholder as a key
	if you dont know what the key would be
	at the execution time
*/
let status = "order condition"
let status = "service"

const vehicle = {
	make:"Mitsubishi",
	p1: 100,
	p2:200,

	//function
	drive(){},

	//arrow function
	stop: ()=>{},

	/*	
		below is a dynamic properties
		if tis not defined above
		it'll throw an error
	*/
	[status]:"ready", 

	//this is same as SQRT2:SQRT2
	SQRT2 
}

//print entire vehicle
console.log(vehicle)