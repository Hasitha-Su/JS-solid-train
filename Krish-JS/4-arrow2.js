// function and arraow func doesnt behave in the same way
// inside print variable there are 2 objects

/* this keyword in a normal function represents caller of the
function */

//in arrow function this doesnot represent the caller

// this is one of the most common confusion among devs

const print = {

	//normal function
	function_1 : function(){
		console.log("This is function 1", this)
	},
	
	// arrow function
	function_2 : ()=>{
		console.log("This is function 2", this)
	}
}

//print.function_1()
//print.function_2()

//regular
function regular(){
	console.log("This is a regular function", this)
}

// arrow function
arrow =()=>{
	console.log("This is an arrow function", this)
}

//regular()
//arrow()