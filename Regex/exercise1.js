/**
 * Write a JavaScript program to test the first character of a string is uppercase or not.
 */

// my solution
function upper_case(str) {
  return /^[A-Z]/.test(str);
}
console.log(upper_case("Abcd"));
console.log(upper_case("abcd"));