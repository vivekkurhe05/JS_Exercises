/**
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']
 */

// my solution
function fill(size, ele) {
  let arr = Array(size);
  return arr.fill(ele, 0, size);
}
console.log(fill(3, "a"));
