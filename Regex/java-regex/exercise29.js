/**
 * Write a Java program to check if a given string is a Mathematical Expression or not.
 */

function validate(exp) {
  //   return re.test(exp);
}

console.log(validate("10"));
console.log(validate("10 + 20"));
console.log(validate("10 * 20 * 30"));
console.log(validate("-10 * 20 - -30"));
console.log(validate("-10 * 20 - -2e4"));
console.log(validate("100 +"));
console.log(validate("100 + foo"));
console.log(validate("10 *+ 20 * 30"));
