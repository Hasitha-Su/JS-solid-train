let obj = { country: "" };

let student = {
  fname: "Monica",
  lname: "Geller",
  parents: {
    father: "Jack Geller",
    mother: "Judy Geller",
  },
};

console.log(student);

//before freeze
student.fname = "Ross";
console.log("sudent:", student);

//freeze
Object.freeze(student);

//after freeze
student.fname = "Joey";
console.log("sudent:", student);

student.parents.father = "Elliott Gould"
console.log("sudent:", student);
