/**
 * Write a JavaScript function to test whether the character at the provided (character) index is lower case. Go to the editor
Test Data :
console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
true
 */

function isLowerCaseAt(str, index) {

    let isLowerCase = false;

    if(str.charAt(index) === str.charAt(index).toLocaleLowerCase()) isLowerCase = true;

    return isLowerCase;
}

console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));