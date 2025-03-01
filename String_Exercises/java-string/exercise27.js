/**
 * Write a Java program to get a substring of a given string at two specified positions.
old = The quick brown fox jumps over the lazy dog.                                                            
new = brown fox jumps
 */

function getSubstring(str, startIndex, endIndex) {
    return str.substring(startIndex, endIndex)
}

console.log(getSubstring("The quick brown fox jumps over the lazy dog.", 10, 25))