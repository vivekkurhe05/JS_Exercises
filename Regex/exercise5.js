/**
 * Write a JavaScript program that work as a trim function (string) using regular expression.
 */

// my solution

function Trim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}
console.log(Trim(" w3resource "));