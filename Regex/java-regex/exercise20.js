/**
 * Write a Java program that takes a number and set thousands separator in that number.
 */

// copied from w3resource javascript exercise 21
function validate(str) {
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log(validate("100"));
console.log(validate("1000"));
console.log(validate("10000"));
console.log(validate("100000"));
console.log(validate("1000000"));
