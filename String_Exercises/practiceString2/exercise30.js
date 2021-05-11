/**
 * Write a JavaScript function check if a string ends with specified suffix.
 * Test Data :
 * console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
 * true
 * console.log(string_endsWith('JS PHP PYTHON',''));
 * false
 */

function string_endsWith (str, word) {
    let doesEndWith = false;

    if( word == '') doesEndWith = false;
    else if (str.lastIndexOf(word, str.length-1) != -1) doesEndWith = true;

    return doesEndWith;
}

console.log(string_endsWith('JS PHP hello','hello'));
console.log(string_endsWith('JS PHP PYTHON',''));