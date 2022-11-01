/**
 * Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno
 */

// my solution
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

const keys = Object.keys(student);
keys.forEach((key) => {
  console.log(key);
});

// or

for (let key in student) {
  console.log(key);
}
