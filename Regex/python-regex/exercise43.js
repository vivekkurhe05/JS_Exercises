/**
 * Write a Python program to split a string at uppercase letters.
 */

// w3resource solution
let text = "PythonTutorialAndExercises";
let re = /[A-Z][^A-Z]*/g;
console.log(text.match(re, "\n"))