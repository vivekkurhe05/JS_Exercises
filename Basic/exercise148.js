/**
 * Write a JavaScript program to swap two halves of a given array of integers of even length.
 */

// your solution

function swap_two_halves(arr) {
    let result = [];
    if(arr.length % 2 !== 0) return false;
    let arr1 = arr.slice(3);
    let arr2 = arr.slice(0, 3)
    result.push(...arr1, ...arr2);
    return result;
}
console.log(swap_two_halves([1,2,3,4,5,6]));
console.log(swap_two_halves([1,2,3,4,5,6,7]));