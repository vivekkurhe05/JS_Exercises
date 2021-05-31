/**
 * Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). 
 * Return true if one or more of them are in the said range.
 */

function verifyRange(a, b, c) {
    return (a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99);
}
console.log(verifyRange(49, 49, 49));
console.log(verifyRange(50, 50, 50));
console.log(verifyRange(51, 51, 51));
console.log(verifyRange(98, 98, 98));
console.log(verifyRange(99, 99, 98));
console.log(verifyRange(100, 100, 100));
console.log(verifyRange(65, 12, 15));