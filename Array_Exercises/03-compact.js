/**
 * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
 * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
 */

// my solution
function compact(arr) {
  return arr.filter((el) => {
    return typeof el === "number" && el != 0;
  });
}
console.log(compact([0, 1, false, 2, undefined, "", 3, null]));
