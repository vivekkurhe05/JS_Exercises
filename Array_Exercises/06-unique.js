/**
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
 */

// my solution
function unique(arr) {
  let set1 = new Set(arr);
  return Array.from(set1);
}
console.log(unique([1, 2, 3, 1, 2]));
