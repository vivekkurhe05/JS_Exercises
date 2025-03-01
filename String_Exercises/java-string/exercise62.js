/**
 * Write a Java program to read a string and return true 
 * if "good" appears starting at index 0 or 1 in the given string.
 * 
 * The given strings is: goodboy
The 'good' appear in the string is: true
 */

function isStart(str) {
    if(str.indexOf("good") === 0 || str.indexOf("good") === 1) return true
}

console.log(isStart("goodboy"))