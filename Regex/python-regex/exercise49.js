/**
 * Write a Python program to remove words from a string of length between 1 and a given number.
 */

// my solution
let text = "The quick brown fox jumps over the lazy dog.   hel";
let remove_three_letters_word = /\b[a-z]{1,3}\b/gi;
let remove_whitespace = /^\s|\s(?=\.)/g;
let remove_extraspace = /\s+/g;
console.log(text.replace(remove_three_letters_word, "").replace(remove_whitespace, "").replace(remove_extraspace, " "));