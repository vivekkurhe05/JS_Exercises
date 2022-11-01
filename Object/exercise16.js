/**
 * Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.
 */

// my solution

let arr = [
  ["red", "#FF0000"],
  ["green", "#00FF00"],
  ["white", "#FFFFFF"],
];

const new_arr = arr.map(function (nested_arr) {
  return nested_arr.reverse();
});

const obj = Object.fromEntries(new_arr);
console.log(obj);
