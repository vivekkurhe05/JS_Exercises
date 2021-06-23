/**
 * Write a JavaScript program to change the capitalization of all letters in a given string.
 */

// your solution

function change_case(str) {
    let str2 = "";
    for(let i=0; i<str.length; i++) {
        str2 +=str.charAt(i) == str.charAt(i).toLowerCase() ? str.charAt(i).toUpperCase() : str.charAt(i).toLowerCase();
    }
    return str2;
}
console.log(change_case("w3resource"));
console.log(change_case("Germany"));

