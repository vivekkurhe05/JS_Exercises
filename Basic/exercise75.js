/**
 * Write a JavaScript program to create a new array taking the middle elements 
 * of the two arrays of integer and each length 3.
 */

function middle_elements(arr1, arr2) {
    let new_array = [];
    new_array.push(arr1[1], arr2[1]);
    return new_array;
}
console.log(middle_elements([4,7,9], [4,3,2]));
console.log(middle_elements([1,3,5], [5,33,2]));