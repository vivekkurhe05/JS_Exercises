/**
 * Write a JavaScript program to create a new string from a given string 
 * with the first character of the given string added at the front and back.
 */

function front_back(str) {
    let chr = str[0];
    return chr + str + chr;
}
console.log(front_back('a'));
console.log(front_back('ab'));
console.log(front_back('abc'));