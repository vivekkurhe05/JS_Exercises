/**
 * Write a Java program to move all lower case letters to the front of a given word keeping the relative
 * position all the letters(both upper and lower case) same.
 */

// my solution
function validate(str) {
  let re = /[a-z]/g;
  let str1 = str.match(re).join("");
  let str2 = str.replace(re, "");
  return str1 + str2;
}

console.log(validate("Java")); // avaJ
console.log(validate("JavaScript")); // avacriptJS
console.log(validate("SQLite")); // iteSQL

// or
// my solution
function validate2(str) {
  let re = /[a-z]/g;
  let str1 = str.match(re).join("");
  let str2 = str.match(/[A-Z]/g).join("");
  return str1 + str2;
}
console.log(validate2("Java")); // avaJ
console.log(validate2("JavaScript")); // avacriptJS
console.log(validate2("SQLite")); // iteSQL