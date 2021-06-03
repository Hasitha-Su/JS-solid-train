/*

let is bloack scope
Const and let workds kinda almost sameway in scope
but you cant reasign a value to a const
**/


const k = 0;

for (var i=0; i<10; i++){

	//const k = i;

	//const k=i;
    //var k=i; 
	//let k=i; 

    console.log(">>>"+i);
}

console.log("last value "+i);
console.log("inner value "+k);