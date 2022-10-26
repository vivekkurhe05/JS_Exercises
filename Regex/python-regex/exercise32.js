/**
 * Write a Python program to replace maximum 2 occurrences of space, comma, or dot with a colon.
 */

// fix it
let text = 'Python Exercises, PHP exercises.';

console.log(text.replace(/[\s,\.]{1,2}/g, ""));