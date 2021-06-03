// destructing with require

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