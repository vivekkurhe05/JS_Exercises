/**
 * Write a JavaScript function to check a given value contains alpha, dash and underscore.
 *
 */

function is_alphaDash(str) {
  let re = /^[0-9a-zA-Z_\-]+$/;
  return re.test(str);
}
console.log(is_alphaDash("12-133"));

console.log(is_alphaDash("100_23"));
