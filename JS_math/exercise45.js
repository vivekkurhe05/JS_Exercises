/**
 * Write a JavaScript function to subtract elements from one another in an array.
 */

// your solution

function subtraction (arr) {
    let sub = 0;

    if(!Array.isArray(arr)) return false;

    for(let i=0; i<arr.length-1; i++) {
        sub = arr[i] - arr[i+1];
    }
    return sub;
}
console.log(subtraction([7,3, 2,-1]));
console.log(subtraction(7,3, 2,-1));