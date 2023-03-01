/**
 * Write a Java program to count the number of decimal places in a given number.
 */

// my solution
function validate(str) {
  let arr_of_str = str.split(".");
  if (arr_of_str.length === 1) {
    return "Number of decimal places in the said number: 0\n";
  } else {
    return (
      "Number of decimal places in the said number: " +
      arr_of_str[1].length +
      "\n"
    );
  }
}

console.log("Original Number: 123");
console.log(validate("123")); // 0

console.log("Original Number: 123.3");
console.log(validate("123.3")); // 1

console.log("Original Number: 123.03");
console.log(validate("123.03")); // 2

console.log("Original Number: 123.223");
console.log(validate("123.223")); // 3

// or
// my solution
function validate2(str) {
  let re = /(?<=\.)\d+/g;
  let match = str.match(re)
  if(match) return match[0].split("").length;
  else return 0;
}

console.log("Original Number: 123");
console.log(validate2("123")); // 0

console.log("Original Number: 123.3");
console.log(validate2("123.3")); // 1

console.log("Original Number: 123.03");
console.log(validate2("123.03")); // 2

console.log("Original Number: 123.223");
console.log(validate2("123.223")); // 3