/**
 * Write a method that makes a shallow compare of two arrays and returns true if they are identical.
 * Expected Result: ([1, 2, 3], [1, 2, 3]) => true
 */

// my solution
function isEqual(arr1, arr2) {
  let arr1Length = arr1.length;
  let arr2Length = arr2.length;

  if (arr1Length === arr2Length) {
    return arr1.every((el) => {
      return arr2.includes(el);
    });
  }
  return false;
}

console.log(isEqual([1, 2, 3], [1, 2, 3])); // true
console.log(isEqual([3, 2, 1], [1, 3, 2])); // true
console.log(isEqual([1, 2, 3], [1, 2, 4])); // false
console.log(isEqual([1, 2, 3], [1, 2, 3, 5])); // false
