/**
 * Write a JavaScript function that returns array elements larger than a number.
 */

// your solution

function biggerElements(arr) {

    return arr.filter((el) => el > 10);
}

console.log(biggerElements([11, 45, 4, 31, 64, 10]));