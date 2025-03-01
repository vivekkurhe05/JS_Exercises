/**
 * Write a Java program to get the character (Unicode code point) at the given index within the string.
 * it means get the unicode value of the character at the specified index
 */

function charCodeAt(str, index) {
    return str.charCodeAt(index)
}

console.log(charCodeAt("w3resource.com", 9))