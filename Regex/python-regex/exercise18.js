/**
 * Write a Python program to search the numbers (0-9) of length between 1 to 3 in a given string.
 */

// my solution
function match_num(str){
    return str.match(/\d+/g).join("\n")
}
console.log(match_num("Exercises number 1, 12, 13, and 345 are important"));