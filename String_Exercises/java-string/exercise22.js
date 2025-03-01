/**
 * Write a Java program to get the length of a given string.
 * "example.com"
 */

function length(str) {
    let count=0
    while(str[count]!=undefined) {
        count++
    }
    return count
}

console.log(length("example.com"))