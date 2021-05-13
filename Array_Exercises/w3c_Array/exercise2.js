/**
 * Write a JavaScript function to get the first element of an array. 
 * Passing a parameter 'n' will return the first 'n' elements of the array.
 * Test Data :
 * console.log(first([7, 9, 0, -2]));
 * console.log(first([],3));
 * console.log(first([7, 9, 0, -2],3));
 * console.log(first([7, 9, 0, -2],6));
 * console.log(first([7, 9, 0, -2],-3));
 * Expected Output :
 * 7
 * []
 * [7, 9, 0]
 * [7, 9, 0, -2]
 * []
 */

function first (arr, n) {

    let arr2 = [];

    if (typeof n == 'undefined') return arr[0];

    for(let i=0; i<n; i++){
        arr2.push(arr[i]);
    }

    return arr2;
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));