/**
 * Task description: Write a method that splits an array into parts of determined size
 * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 */

// my solution
function chunk(arr, size) {
  let str = arr.join("");
  let reg = /\d{1,2}/g;
  return str.match(reg).map((el) => {
    return el.split("");
  });
}
console.log(chunk([1, 2, 3, 4, 5], 2));
