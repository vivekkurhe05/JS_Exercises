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
