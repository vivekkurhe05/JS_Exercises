/**
 *
 */

// my solution
function all_values(obj) {
  let val = Object.values(obj);
  return val;
}

console.log(all_values({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));

// or my solution

function all_values2(obj) {
  let arr = [];
  for (let prop in obj) {
    arr.push(obj[prop]);
  }
  return arr;
}

console.log(
  all_values2({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" })
);
