/**
 * Write a JavaScript program to get the length of a JavaScript object. Go to the editor
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
 */

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

const keys = Object.keys(student);
console.log("Length of an object is", keys.length);

// or

let counter = 0;
for (let key in student) {
  if (student.hasOwnProperty(key)) {
    counter++;
  }
}
console.log(counter);
