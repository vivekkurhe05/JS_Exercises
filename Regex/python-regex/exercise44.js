/**
 * Write a Python program to do a case-insensitive string replacement.
 */

// my solution
let text = "PHP Exercises";

let re = /PHP/;

console.log(text.replace(re, re.source.toLocaleLowerCase()));