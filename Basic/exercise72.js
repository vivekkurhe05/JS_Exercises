/**
 * Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3.
 */

function isEqual(arr) {
    return arr[0] == arr[arr.length-1];
}
console.log(isEqual([1,2,3]));
console.log(isEqual([1,2,1]));