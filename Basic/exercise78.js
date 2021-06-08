/**
 * Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3.
 */

 function test_not1or3(arr) {

    if((!arr.includes(1)) || (!arr.includes(3))) return true;
     return false;
 }
console.log(test_not1or3([1,2]));
console.log(test_not1or3([2,5]));