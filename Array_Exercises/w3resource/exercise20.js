/**
 * Write a JavaScript program to find duplicate values in a JavaScript array.
 */

// my solution
function find_duplicate_in_array(arr) {
  let dup = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      dup.push(arr[i]);
    }
  }

  return Array.from(new Set(dup));
}

console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));
