/**
 * Write a JavaScript function to test whether the character at the provided (character) index is upper case. Go to the editor
Test Data :
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
false
 */

function isUpperCaseAt(str, index) {

    let isUpperCase = false;

    if(str.charAt(index) === str.charAt(index).toLocaleUpperCase()) isUpperCase = true;

    return isUpperCase;
}

console.log(isUpperCaseAt('Js STRING EXERCISES', 1));