/**
 * Write a Python program to extract values between quotation marks of a string.
 */

// my solution
let text1 = '"Python", "PHP", "Java"';

console.log(text1.match(/[A-Za-z]+/g));