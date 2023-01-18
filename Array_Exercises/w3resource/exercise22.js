/**
 * Write a JavaScript program to compute the union of two arrays.
Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]
 */

// my solution
function union(arr1, arr2) {
  let arr = [arr1, arr2];
  return Array.from(new Set(arr.flat(1))).sort((a, b) => a - b);
}
console.log(union([1, 2, 3], [100, 2, 1, 10]));
