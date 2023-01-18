/**
 * Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level. Go to the editor
Sample Data :
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
[1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
[1, 2, 3, [[4]], 5, 6]
 */

// my solution
function flatten(arr, bool) {
  if (bool) {
    return arr.flatMap((el) => el);
  } else {
    return arr.flat(Infinity);
  }
}

console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));
console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true));
