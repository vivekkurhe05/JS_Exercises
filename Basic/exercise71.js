/**
 * Write a JavaScript program to check whether 1 appears in first or last 
 * position of a given array of integers. The array length must be greater or equal to 1.
 */

function check_1(arr) {
    return arr[0] == 1 || arr[arr.length-1] == 1;
}
console.log(check_1([1,2,3,4,5,1]));
console.log(check_1([1]));
console.log(check_1([1,2,3,4,5]));
console.log(check_1([2,3,4,5,1]));
console.log(check_1([2,3,4,5]));