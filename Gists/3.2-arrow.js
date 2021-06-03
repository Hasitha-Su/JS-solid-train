
const func = {

	//normal function
	regularFunc:function(){
		console.log("This is a regular function", this)
	},
	
	// arrow function
	arrowFunc:()=>{
		console.log("This is an arrow function", this)
	}
}

func.regularFunc()
func.arrowFunc()