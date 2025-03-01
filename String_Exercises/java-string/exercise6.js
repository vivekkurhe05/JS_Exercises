/**
 * Write a Java program to compare two strings lexicographically, ignoring case differences.
String 1: This is exercise 1                                                                                  
String 2: This is Exercise 1                                                                                  
"This is exercise 1" is equal to "This is Exercise 1"
 */

function compareStrings(str1, str2) {
    let result=""
    if(str1.localeCompare(str2, "en", {sensitivity: "base"})===0) {
        result = `"${str1}" is equal to "${str2}"`
    }else {
        result = `"${str1}" is not equal to "${str2}"`
    }
    return result
}

console.log(compareStrings("This is exercise 1", "This is Exercise 1"))