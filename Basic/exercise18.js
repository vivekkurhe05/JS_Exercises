/**
 * Write a JavaScript program to check two given numbers and return true 
 * if one of the number is 50 or if their sum is 50.
 */

function isFifty(num1, num2) {
    if (num1 === 50 || num2 === 50 || (num1 + num2) == 50) return true;
    return false;
}
console.log(isFifty(10, 50));
console.log(isFifty(25, 25));
console.log(isFifty(24, 25));