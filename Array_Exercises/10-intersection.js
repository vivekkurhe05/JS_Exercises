/**
 * Write a method that creates an array of unique values that are included in all given arrays
 * Expected Result: ([1, 2], [2, 3]) => [2]
 */

// my solution
function intersection(arr1, arr2) {
  return arr1.filter((el) => {
    return arr2.includes(el);
  });
}

console.log(intersection([1, 2], [2, 3]));
