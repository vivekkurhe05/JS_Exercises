/**
 * Write a Java program to get the character 
 * (Unicode code point) before the specified index within the string.
 * 
 */

function charCodeBefore(str, index) {
    index = index-1
    return str.charCodeAt(index)
}

console.log(charCodeBefore("w3resource.com", 9))