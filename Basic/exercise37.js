/**
 * Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. 
 * If the string length is less than 3 convert all the characters in upper case.
 */

function upper_lower(str) {
    if (str.length < 3) return str;
    return str.substr(0, 3).toLocaleLowerCase() + str.substr(3);
}
console.log(upper_lower('PYTHON'));
console.log(upper_lower('PY'));