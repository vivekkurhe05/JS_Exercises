/**
 * 
 * Write a JavaScript function to check whether a string is blank or not.
 * Test Data :
 * console.log(is_Blank(''));
 * console.log(is_Blank('abc'));
 * true
 * false
 */

function is_blank (str) {

    if(str.length == 0) return true;
    return false;
}

console.log(is_blank(''));
console.log(is_blank('abc'));


// or

function is_blank (str) {

    if(str == '') return true;
    return false;
}

console.log(is_blank(''));
console.log(is_blank('abc'));