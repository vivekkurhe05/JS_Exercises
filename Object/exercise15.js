/**
 * Write a JavaScript function to convert an object into a list of '[key, value]' pairs.
 */

// my solution
function key_value_pairs(obj) {
  let entries = Object.entries(obj);
  return entries;
}

console.log(
  key_value_pairs({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" })
);
