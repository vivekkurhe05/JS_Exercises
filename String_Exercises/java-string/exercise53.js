/**
 * Write a Java program to match two strings where one string contains wildcard characters
 * The given string is: abcdhgh
The given pattern string is: abc*d?*
The given pattern is matching.
 */

function matchStrings(str1, pattern) {
    const re = /abc*d.+/g
    if(re.test(str1)){
        return "The given pattern is matching"
    }
    
}

console.log(matchStrings("abcdhgh"))