/**
 * Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
 */

function testHundred(num) {
    return (100 - num) <= 20 || (400 - num) <= 20;
}

console.log(testHundred(20));
console.log(testHundred(80));
console.log(testHundred(99));
console.log(testHundred(385));