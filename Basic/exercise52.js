/**
 * Write a JavaScript program to convert the letters of a given string in alphabetical order.
 */

function alphabetizeString(str){
    return str.trim().split("").sort((a,b)=> a.localeCompare(b)).join("");
}
console.log(alphabetizeString("Welcome"));