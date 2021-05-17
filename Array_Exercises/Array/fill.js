/**
 * 
 */

const array1 = [1, 2, 3, 4];

console.log(array1.fill(0, 2, 4)); // [1,2,0,0]
console.log(array1.fill(5, 1)); // [1,5,5,5]
console.log(array1.fill(6)); // [6,6,6,6]
console.log('\n');

console.log([1, 2, 3].fill(4)); // [4,4,4]
console.log([1, 2, 3].fill(4, 1)); // [1,4,4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1,4,3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1,2,3]
console.log([1, 2, 3].fill(4, 3, 3));// [1,2,3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4,2,3] 3-3=0, 3-2=1
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1,2,3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1,2,3]
console.log(Array(3).fill(4)); // [4,4,4]
console.log([].fill.call({ length: 3 }, 4)); // []