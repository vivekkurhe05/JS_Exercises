/**
 * Write a Java program to remove leading zeros from a given IP address
 */

// my solution
function validate(str) {
  const re = /\b0+(?=\d)/g;
  return str.replace(re, "");
}

console.log(validate("216.08.094.196")); // 216.8.94.196
console.log(validate("08.008.0008.00008")); // 8.8.8.8
console.log(validate("01.102.103.104")); // 1.102.103.104

//or

// my solution
function validate(str) {
  let array_of_substrings = str.split(".");
  return array_of_substrings
    .map(function (el) {
      return el.replace(/^0+/, "");
    })
    .join(".");
}

console.log(validate("216.08.094.196")); // 216.8.94.196
console.log(validate("08.008.0008.00008")); // 8.8.8.8
console.log(validate("01.102.103.104")); // 1.102.103.104

// or
// my solution
function validate2(str) {
  let re = /^0+/g;
  let arr = str.split(".");
  return arr
    .map((el) => {
      return el.replace(re, "");
    })
    .join(".");
}

console.log(validate2("216.08.094.196")); // 216.8.94.196
console.log(validate2("08.008.0008.00008")); // 8.8.8.8
console.log(validate2("01.102.103.104")); // 1.102.103.104