/**
 * Write a JavaScript program to test whether a string end with "Script". 
 * The string length must be greater or equal to 6.
 */

function endsWith(str) {
    if(str.length >= 6){
        return str.endsWith("Script");
    }
    return false;   
}
console.log(endsWith("I luv JavaScript"));
console.log(endsWith("I luv"));

// or

function endsWith(str) {
    if(str.length >= 6){
        return str.lastIndexOf('Script') != -1;
    }
    return false;   
}
console.log(endsWith("I luv JavaScript"));
console.log(endsWith("I luv"));

// or

function endsWith(str) {
    if(str.length >= 6){
        return str.slice(-6) === "Script";
    }
    return false;   
}
console.log(endsWith("I luv JavaScript"));
console.log(endsWith("I luv"));