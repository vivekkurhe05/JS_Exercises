/**
 * Write a JavaScript program to move last three character to the start of a given string. 
 * The string length must be greater or equal to three.
 */

function movechars(str){
    let x = str.slice(-3);
    let y = x + str.substring(0, str.length-x.length);
    return y;
}
console.log(movechars("race"));