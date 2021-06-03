// destructing with objects
const iPhone12 = {
  brand: "Apple",
  display: "Super Retina",
  platform: "iOS 14.1",
  battery: "3687mAh",
};

let { display, battery } = iPhone12;
console.log(`iPhone12 has a ${display} display and a ${battery} battery`);

/** 
 * takes the iPhone12 object
 * gets brand property and assign to brand
 * rest of everything will assign as other2 object
 */
let { brand, ...other2 } = iPhone12;
console.log("brand: ",brand);
console.log("rest of details: ",other2);

//like you coied arrays above, you can use this to copy objects
let restDetails = { ...other2 };
console.log("Copy of other details of phone: ", restDetails);

//eliminate with rest
let student = {
  fname: "Monica",
  lname: "Geller",
  parents: {
    father: "Jack Geller",
    mother: "Judy Geller",
  },
};

let {fname, lname, ...parents} = student
console.log("Monica only details: ", fname +" "+lname)
console.log("Parent  details: ", parents)

//copy parent object to another object
let parentsDuplicate = {...parents}
console.log("Parent  details duplicate: ", parentsDuplicate)