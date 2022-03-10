/**
 * Write a JavaScript function to Uncapitalize? the first character of a string. Go to the editor
Test Data :
console.log(Uncapitalize('Js string exercises'));
"js string exercises"
 */

function Uncapitalize(str) {

    return str.charAt(0).toLocaleLowerCase() + str.substr(1);
}

console.log(Uncapitalize('Js string exercises'));