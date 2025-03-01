/**
 * Write a Java program to reverse every word in a string using methods.
 * The given string is: This is a test string
The string reversed word by word is: 
sihT si a tset gnirts
 */

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
}

console.log(reverseWords("This is a test string"))