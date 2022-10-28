/**
 * Write a Python program to find all adverbs and their positions in a given sentence.
 */
// my solution
let text = "Clearly, he has no excuse for such behavior.";
let re = /[A-Za-z]+ly\b/gi;
console.log(...text.match(re));