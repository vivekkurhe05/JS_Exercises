/**
 * Write a JavaScript program to remove all characters from a given string that appear more than once.
 */

// this solution is wrong. It returns the unique string.

function remove_duplicate(str) {
    let unique_str = "";

    for(let i=0; i<str.length; i++) {
        if(!unique_str.includes(str[i])){
            unique_str += str[i];
        }
    }
    return unique_str;
}
console.log(remove_duplicate('abcdabc'));