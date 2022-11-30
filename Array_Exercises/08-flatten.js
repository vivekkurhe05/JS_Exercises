/**
 * Write a method that turns a deep array into a plain array
 * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 */

function flatten(arr) {
  return arr.flat(2);
}

console.log(flatten([1, 2, [3, 4, [5]]]));
