/**
 * Write a JavaScript program to check from three given numbers (non negative integers) 
 * that two or all of them have the same rightmost digit.
 */

function checkRightmostDigit(num1, num2, num3) {
    var x = num1 % 10;
    var y = num2 % 10;
    var z = num3 % 10;

    return (x == y && y == z && z == x) || (x == y || y == z || z == x);
}
console.log(checkRightmostDigit(233, 122, 455));
console.log(checkRightmostDigit(23, 43, 63));
console.log(checkRightmostDigit(443, 553, 122));