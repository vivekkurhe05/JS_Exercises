/**
 * Write a JavaScript program to check two given integer values and return true 
 * if one of the number is 15 or if their sum or difference is 15.
 */

function checkNum(num1, num2) {
    var sum = num1 + num2;
    var diff = Math.abs(num1 - num2);

    return (num1 == 15 || num2 == 15) || (sum == 15) || (diff == 15);
}
console.log(checkNum(22, 33));
console.log(checkNum(15, 33));
console.log(checkNum(22, 15));
console.log(checkNum(8, 7));
console.log(checkNum(30, 15));