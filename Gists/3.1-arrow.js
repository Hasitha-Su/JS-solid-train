//regular function
function area(x, y) {
  return x * y;
}

// no function keyword
// arrow connects function and function body
const area2 = (x, y) => {
  return x * y;
};

const area3 = (x, y) => x * y;

//with only one argument
const area4 = (x) => x * x;

const sayHi = (input) => console.log("Hi " + input);

console.log(area(10, 12));
console.log(area2(10, 12));
console.log(area3(10, 12));
console.log(area4(10));

sayHi("Joey");
