/**
 * Write a JavaScript function to test whether a string ends with a specified string.
 * Test Data :
 * console.log(endsWith('JS string exercises', 'exercises'));
 * true
 */

function endsWith (str, substr) {
    let arr = str.split(' ');
    let endStringLength = arr[arr.length-1].length;
    return str.lastIndexOf(substr) == str.length-endStringLength;
}

console.log(endsWith('JS string exercises', 'exercises'));