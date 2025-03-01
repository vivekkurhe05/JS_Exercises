/**
 * Write a Java program to compare two strings lexicographically.
Two strings are lexicographically equal if they are the same length 
and contain the same characters in the same positions.

String 1: This is Exercise 1                                                                                  
String 2: This is Exercise 2                                                                                  
"This is Exercise 1" is less than "This is Exercise 2" 
 */

function compareStrings(str1, str2) {
    let result=""
    if(str1.localeCompare(str2) == -1) {
        result = `"${str1}" is less than "${str2}"`
    }else if(str1.localeCompare(str2) == 1) {
        result = `"${str1}" is greater than "${str2}"`
    }else {
        result = `"${str1}" is equal to "${str2}"`
    }
    return result
}

console.log(compareStrings("This is Exercise 1", "This is Exercise 2"))