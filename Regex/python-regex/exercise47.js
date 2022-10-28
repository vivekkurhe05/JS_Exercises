/**
 * Write a Python program to split a string with multiple delimiters.
 */

let text = 'The quick brown\nfox jumps*over the lazy dog.';
let re = /[A-Za-z ]*(?=\\n)/gi;
console.log(text.match(re));