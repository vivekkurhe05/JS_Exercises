/**
 * Write a JavaScript function to cast a square root of a number to an integer.
Test Data :
console.log(sqrt_to_int(17));
4
 */

// your solution

function sqrt_to_int (num) {
    return Math.round(Math.sqrt(num));
}
console.log(sqrt_to_int(17));