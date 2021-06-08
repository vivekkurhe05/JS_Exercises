/**
 * Write a JavaScript program to create a new string without the first and last character of a given string.
 */

function new_string(str) {
    return str.substr(1, str.length-2);
}
console.log(new_string('JavaScript'));