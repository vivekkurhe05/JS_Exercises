/**
 * Write a JavaScript program to create a new array taking the first and last elements from 
 * a given array of integers and length must be greater or equal to 1.
 */

function first_last(arr) {
    let new_array = [];
    if(arr.length >= 1){
        new_array.push(arr[0], arr[arr.length-1]);
    }
    return new_array;
}
console.log(first_last([1,2,3,4,5]));