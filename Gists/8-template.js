let student = {
  fname: "Monica",
  lname: "Geller",
  parents: {
    father: "Jack Geller",
    mother: "Judy Geller",
  },
};

//ES5
let sayHey1 = "Hello, "+student.fname+". Is "+student.parents.mother+" at home ?";
console.log(sayHey1);

//ES6
let sayHey2 = `Hello, ${student.fname}. Is ${student.parents.mother} at home ?`;
console.log(sayHey2);