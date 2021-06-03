// destructing with arrays

let manufactures = ["Apple", "Samsung", "OnePlus", "Motorola"];

// with ES5
let a = manufactures[0];
let b = manufactures[1];
let c = manufactures[3];

console.log(`${a}, ${b}, ${c}`);

// with ES6
let [a1, b1, c1, d1] = manufactures;
console.log(`${a1}, ${b1}, ${c1}, ${d1}`);

/*
 * with rest operator
 * rest operator is nothing but three dots known as the three dot operator(...)
 * first element will be assigned to 'b1' and the rest will be
 * assigned to a new array 'others'
 */
let [mostExpensive, ...other] = [
  "iMac",
  "Rog-Gaming",
  "NoteBook-Pro",
  "NoteBook-Light",
];
console.log("Most expensive PC is ", mostExpensive);
console.log("Other PCs are ", other);

//if you want to ignore a element in the array
//lets ignore "Samsung"
let [a2, , c2, d2] = manufactures;
console.log(`wihout Samsung: ${a2}, ${c2}, ${d2}`);

//merge arrays
months = ["Jan", "Feb", "March", "Apr", "May", "June"]
let [first, ...restOfMonths] = months

console.log("First month: ",first)
console.log("Rest of the months: ", restOfMonths)

months2 = ["July", "Aug", "Sept", "Oct", "Nov", "Dec"]

// merge without rest
let allMonths = [restOfMonths, months2]
console.log("All months: ",allMonths)

//merge with rest
let allMonths2 = [...restOfMonths, ...months2]
console.log("All months: ",allMonths2)