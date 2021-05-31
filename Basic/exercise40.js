/**
 * Write a JavaScript program to check from two given integers 
 * whether one of them is 8 or their sum or difference is 8.
 */

function check8(num1, num2) {
    var sum = num1 + num2;
    var difference = Math.abs(num1 - num2);

    return num1 == 8 || num2 == 8 || sum == 8 || difference == 8;
}
console.log(check8(4, 4));
console.log(check8(16, 8));
console.log(check8(8, 16));
console.log(check8(8, 4));
console.log(check8(7, 4));