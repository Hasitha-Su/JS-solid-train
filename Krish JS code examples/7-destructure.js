// using destruct

//using destruct 1st

//below both are the same

// 1
//const PI = Math.PI
//const SQRT2 = Math.SQRT2

//2
const { PI, SQRT2 } = Math;

console.log(PI);

// destruct with functions
const square = {
  base: 12.2,
  id: "main",
  colour: "blue",
  line: "true",
  rounded: false,
  round: 0,
};
//=============================================
// destruct with function
//==============================================
// function declaration
//only base goes inside the function
const area = ({ base }) => {
  return base * base;
};

//function call
// we pass the square
console.log(area(square));

//============================================
// we pass value 3 for round even though its not declared
const area2 = ({ base }, { round = 3 } = {}) => {
  //precison is 3
  return (base * base).toFixed(round);
};

console.log(area2(square));
console.log(area(square, { round: 5 }));

//============================================
// destruct with require
//============================================

//without destruct
var fs = require("fs");

fs.writeFile("sampleText.txt", "Hellow JS", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

//with destruct
const { writeFile } = require("fs");

writeFile("sampleText2.txt", "Howdy, stranger", function (err) {
  if (err) throw err;
  console.log("saved 2..!");
});

//============================================
// destruct with arrays
//============================================

//automatically asign Jan to 10
// what about the empty one
// ooh that, Js will sikp that

//const [Jan, Feb, Mar, ,May] = [10, 20, 30, 40, 50]
//console.log("Jan "+Jan)
//console.log("May "+May)

// well there is another way to do this
//using rest operator

// 1st value is assigned to month1
// rest will be assigned to 'otherMonths' as a new array

const [month1, ...otherMonths] = [10, 20, 30, 40, 50];
console.log(month1);
console.log(otherMonths);

let newArrayHere = [...otherMonths];
console.log("new array >>>", newArrayHere);

let newArray2 = [...otherMonths, ...newArrayHere];
console.log("New array 2: ", newArray2);
console.log("New array 2: " + newArray2);

//============================================
// rest to eliminate
//============================================

const data = {
  name: "Brian",
  city: "NC",
  country: "USA",
  age: 48,
  vehicle: "Ford",
  game: "Baseball",
};

//takes the data object
//gets vehicle property and assign to vehicle
//gets game property and assigns to game
// rest of everything will assign as person object
//vehicle and game will not be in person obj

let { vehicle, game, ...person } = data;
console.log("Person obj ", person);
console.log("Vehicle obj: ", vehicle);

//like you coied arrays above, you can use this to copy objects
let person_2 = { ...person };
console.log("Person 2 ===>", person_2);
