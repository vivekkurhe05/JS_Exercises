/**
 * Write a method that returns an object composed of key-value pairs.
 * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 */

function fromPairs(arr) {
  return Object.fromEntries(arr);
}
console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
  ])
);
