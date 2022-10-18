/**
 * Write a JavaScript function to check whether a given value is hexadecimal value or not.
 * hexadecimal value is 6 characters long
 * 6 characters contain either digits or alphabets or alphanumeric
 * digits range from 0-9
 * alphabets range from a-f or A-F
 */

// my solution
function is_hexadecimal(hex_code) {
  let re = /^[0-9a-fA-F]{6}$/;
  return re.test(hex_code);
}

console.log(is_hexadecimal("ffffff"));

console.log(is_hexadecimal("fz5500"));
