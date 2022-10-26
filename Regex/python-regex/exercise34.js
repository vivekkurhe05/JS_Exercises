/**
 * Write a Python program to find all three, four, five characters long words in a string.
 */

// my solution
let text = 'The quick brown fox jumps over the lazy dog.';

console.log(text.match(/\w{3,5}/g));