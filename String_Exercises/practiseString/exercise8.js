/**
 * Write a JavaScript function to capitalize the first letter of a string.
 * Test Data :
 * console.log(capitalize('js string exercises'));
 * "Js string exercises"
 */

function capitalize(str){
    if(str.length > 0){
        return str.charAt(0).toLocaleUpperCase() + str.substring(1);
    }
    
}

console.log(capitalize('js string exercises'));