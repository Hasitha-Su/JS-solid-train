
let obj = {"country":""}

obj.country = "Sri Lanka"

Object.freeze(obj)
console.log(obj)

obj.country="USA"
console.log(obj)

let flower = {
	name:"",
	price: {
		t1: 10,
		t2: 20
	}
}

flower.name = "Rose"
flower.price.t1 = 15

console.log(flower)
Object.freeze(flower)

/* 
	if you call freeze() that will only freeze
	only first level values. it doesnot freeze 
	inner level objects 
*/
flower.name = "Chrysanthemum"
flower.price.t1 = 18

console.log(flower)