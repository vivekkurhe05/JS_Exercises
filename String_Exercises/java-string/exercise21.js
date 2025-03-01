/**
 * Write a Java program to get the last index of a string within a string.
 * Sample string of all alphabet: "The quick brown fox jumps over the lazy dog."
 */

function getLastIndex(str, substr) {
    return str.lastIndexOf(substr)
}

console.log(getLastIndex("The quick brown fox jumps over the lazy dog.", "quick"))