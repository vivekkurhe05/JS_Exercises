/**
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
 */

// my solution
function without(arr) {
  return arr.filter((el, index, arr) => {
    return arr.indexOf(el) === arr.lastIndexOf(el);
  });
}

console.log(without([1, 2, 3, 1, 2]));
