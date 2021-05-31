/**
 * Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.
 */

function isMultiple(num) {
    return num > 0 && (num % 3 === 0 || num % 7 === 0);
}
console.log(isMultiple(21));
console.log(isMultiple(15));
console.log(isMultiple(14));
console.log(isMultiple(16));
console.log(isMultiple(-1));