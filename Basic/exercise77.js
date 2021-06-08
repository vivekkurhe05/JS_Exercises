/**
 * Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.
 */

function test_1or3(arr) {
    return arr.includes(1) || arr.includes(3);
}
console.log(test_1or3([1,4]));