/**
 * Write a Java program to remove all the vowels of a given string. Return the new string.
 */

// my solution
function validate(str) {
  return str.replace(/[aeiou]/gi, "");
}

console.log(validate("Hello there!! Count total number of vowels in a string"));
