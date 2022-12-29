/**
 * How to convert a string into a integer without using parseInt() function in JavaScript ?
 */

// geeks for geeks solution
function convertStoI(str) {
  return typeof (str * 1);
}

console.log(convertStoI("100"));
