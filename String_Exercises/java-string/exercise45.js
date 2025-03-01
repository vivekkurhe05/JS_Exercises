/**
 * Write a Java program to reverse words in a given string.
 * 
 * The given string is: Reverse words in a given string
The new string after reversed the words: string given a in words Reverse
 */

function reverseWords(str) {
    return str.split(" ").reverse().join(" ")
}

console.log(reverseWords("Reverse words in a given string"))