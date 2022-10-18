/**
 * Write a Java program to replace all the vowels in a given string with a specified character.
 */

// my solution
function validate(str) {
  return str.replace(/[aeiou]/gi, "$");
}

console.log(validate("Hello there!! Count total number of vowels in a string"));
