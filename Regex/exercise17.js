/**
 * Write a JavaScript function to check whether a given value is hexcolor value or not.
 * hexcolor is either 3 or 6 characters long
 * hexcolor may or may not start with #
 * hexcolor contains either digits or alphabets or alphanumeric
 * digits range from 0-9
 * alphabets range from a-f or A-F
 */

function is_hexcolor(code) {
  let re = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
  return re.test(code);
}
console.log(is_hexcolor("#444"));

console.log(is_hexcolor("#3333"));
