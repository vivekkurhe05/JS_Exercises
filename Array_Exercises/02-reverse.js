/**
 * Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 */

// my solution
function reverse(arr) {
  return arr.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });
}
console.log(reverse([1, 2, 3]));
