/**
 * Write a JavaScript program to add two digits of a given positive integer of length two.
 */

function addTwoDigits(arr) {
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(addTwoDigits([1,2]));

//or

function addTwoDigits(arr) {

    return arr.reduce((sum, i) => {
        return sum += i;
    });
}
console.log(addTwoDigits([1,2]));