/**
 * Write a JavaScript program to check whether the last digit of the three given positive integers is same.
 */

function isLastDigitSame(a, b, c) {
    var x = a % 10;
    var y = b % 10;
    var z = c % 10;

    return x === y && y === z && z === x;
}
console.log(isLastDigitSame(23, 73, 43));