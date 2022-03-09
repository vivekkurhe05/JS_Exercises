/**
 * Write a JavaScript function check if a string ends with specified suffix. Go to the editor
Test Data :
console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
true
console.log(string_endsWith('JS PHP PYTHON',''));
false
 */

function string_endsWith(str, substr) {

    if(substr.length > 0) return str.endsWith(substr);
    return false;
}
console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
console.log(string_endsWith('JS PHP PYTHON',''));