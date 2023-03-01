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

// or 
// my solution
function validate2(str) {
  let re = /\d$/g;
  return re.test(str);
}

console.log(validate2("abcdef")); // false
console.log(validate2("3abcdef")); // false
console.log(validate2("abcdef9")); // true
console.log(validate2("abcdef3459")); // true