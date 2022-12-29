/**
 * How to get character array from string in JavaScript ?
 */

function getArrayChars(str) {
    return str.split("").join(",")
}

console.log(getArrayChars('GeeksforGeeks: A Computer Science Portal'))