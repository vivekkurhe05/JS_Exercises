/**
 * Write a JavaScript program to create a new string from a given string, 
 * removing the first and last characters of the string if the first or last character are 'P'. 
 * Return the original string if the condition is not satisfied.
 */

function createNewString(str) {
    if((str.charAt(0) == 'P' || str.charAt(0) == 'p') && (str.charAt(str.length-1) == 'P' || str.charAt(str.length-1) == 'p')){
        return str.substring(1, str.length-1);
    }
    return str;
}
console.log(createNewString('Phillip'));
console.log(createNewString('Pianno'));