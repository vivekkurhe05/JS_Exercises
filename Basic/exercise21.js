/**
 * Write a JavaScript program to create a new string adding "Py" in front of a given string. 
 * If the given string begins with "Py" then return the original string.
 */

function string_check(str) {
    if(!str.startsWith('Py')){
        return 'Py'+str;
    }
    return str;
}
console.log(string_check('thon'));
console.log(string_check('Python'));

/**
or
 */

function string_check(str) {
    if(str.indexOf('Py') !== 0){
        return 'Py'+str;
    }
    return str;
}
console.log(string_check('thon'));
console.log(string_check('Python'));