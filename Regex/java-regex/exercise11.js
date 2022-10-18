/**
 * Write a Java program to check for a number at the end of a given string.
 */

// my solution
function validate(str) {
  let re = /.*[0-9]$/;
  return re.test(str);
}

console.log(validate("abcdef")); // false
console.log(validate("3abcdef")); // false
console.log(validate("abcdef9")); // true
console.log(validate("abcdef3459")); // true
