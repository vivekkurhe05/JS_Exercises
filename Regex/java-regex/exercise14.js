/**
 * Write a Java program to count number of vowels in a given string using regular expression.
 */

// my solution
function validate(str) {
  return str.match(/[aeiou]/gi).length;
}

console.log(validate("Hello there!! Count total number of vowels in a string"));
