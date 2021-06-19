const http = require('http');

// function, takes url as parameter
function fetchWebpage(url){

	//function will return a new promise
	return new Promise(( resolve, reject) =>{
		http.get(url, response =>{
			let responseData
			response.on('data', data => responseData = responseData + data)
			response.on('end', ()=>resolve(responseData))
			response.on('error', reject)
		}) 
	})
}


/*

fetchWebpage('http://www.krishantha.com')

// then = when its complete
.then(data => console.log(data.length))

// if there is an error
.catch(error => console.log(error))
.finally( ()=> console.log("Finished"))

*/

//======================================================

function readWebpage(){
	let res = ''
	resp = fetchWebpage('http://www.krishantha.com')

	// this doesnt wait untill the results come
	console.log("2 ", resp.length)
}

readWebpage()

// so lets make some changes to the function
//===================================================


/*

this is the same function as readWebpage2()
but we have async keyword says
await says, call fetchWebpage, that will return a promise object
wait untill promise resolve
once its resolved,continue to the next line

*/
async function readWebpage2(){

	let resp = ""
	resp = fetchWebpage('http://www.krishantha.com')
	console.log("3", resp.length)

	resp = await fetchWebpage('http://www.krishantha.com')
	console.log("4", resp.length)
}

readWebpage2()











