/**
 * Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
 */

function computeTheSum(arr) {
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(computeTheSum([1,2,3]));

//or

function computeTheSum(arr) {
    return arr.reduce(function(acc, curr){
        return acc += curr;
    }, 0);
}
console.log(computeTheSum([2,2,3]));