/**
 * Write a JavaScript function to calculate the sum of values in an array.
Test Data :
console.log(sum([1,2,3]));
console.log(sum([100,-200,3]));
console.log(sum([1,2,'a',3]));
Output :
6
-97
6
 */

// your solution

function sum (arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        if(typeof arr[i] === 'number'){
            sum = sum + arr[i];
        }   
    }
    return sum;
}
console.log(sum([1,2,3]));
console.log(sum([100,-200,3]));
console.log(sum([1,2,'a',3]));