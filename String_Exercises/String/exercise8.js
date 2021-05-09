/**
 * 
 * Write a JavaScript function to capitalize the first letter of a string.
 * Test Data :
 * console.log(capitalize('js string exercises'));
 * "Js string exercises"
 */

function capitalize(str){
    let letter = str.charAt(0);
    return str.replace(letter, letter.toLocaleUpperCase());
}

console.log(capitalize('js string exercises'));


//or

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize('js string exercises'));