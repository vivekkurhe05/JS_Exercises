/**
 * Write a JavaScript function to get the last element of an array. Passing a parameter 'n' 
 * will return the last 'n' elements of the array. Go to the editor
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]
 */

/**
 * 
 * 
 *  
 * my solution
 */
function last(arr, n) {

    if(typeof n == 'undefined') return arr[arr.length - 1];
    return arr.slice(-n);
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));