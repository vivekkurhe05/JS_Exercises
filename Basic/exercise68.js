/**
 * Write a JavaScript program to create a new string using the first and last n characters from a given sting. 
 * The string length must be greater or equal to n. 
 */

function createString(str, n) {

    if(str.length >= n)
        return str.substr(0, n) + str.substr(str.length-n);
}
console.log(createString('JavaScript', 2));
console.log(createString('J', 2));