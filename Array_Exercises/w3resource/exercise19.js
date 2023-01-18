/**
 * There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
 * Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]
 */

// my solution
let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];
let a1 = array1.length;
let a2 = array2.length;
let arr3 = [];
let sum = 0;

for (let i = 0; i < Math.max(a1, a2); i++) {
  if (array1[i] == undefined) array1[i] = 0;
  sum += array1[i] + array2[i];
  arr3.push(sum);
  sum = 0;
}
console.log(arr3);
