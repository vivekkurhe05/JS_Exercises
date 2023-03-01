/**
 * Write a Java program to separate consonants and vowels from a given string.
 */

// my solution
function validate(str) {
  let re1 = /[^aeiou]/gi;
  let consonants = str.match(re1).join("");
  let vowels = str.match(/[aeiou]/gi).join("");

  return consonants + vowels;
}
console.log(validate("Java"));
console.log(validate("JavaScript"));
console.log(validate("SQLite"));

// or
// my solution
function validate2(str) {
  let re = /[aeiou]/gi;
  let str1 = str.match(/[^aeiou]/gi).join("");
  let str2 = str.match(re).join("");
  return str1+str2;
}

console.log(validate2("Java"));
console.log(validate2("JavaScript"));
console.log(validate2("SQLite"));