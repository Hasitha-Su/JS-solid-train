//global scope
const k = 0;

for (var i=0; i<10; i++){

	//const k = i;
	let k=i;  //function scope

    console.log(">>"+i);
}

console.log("last value "+i);
console.log("inner value "+k);