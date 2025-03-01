/**
 * Write a Java program to read two strings append them together and return the result. 
 * If the strings are different lengths, 
 * remove characters from the beginning of the longer string and make them equal lengths.
 * 
 * The given strings is: Welcome and home
The new string is: comehome
 */

// my sol
function appendString(str1, str2) {
    let newstr = ""
    if(str1.length > str2.length) {
        let startIndex = str1.length - str2.length
        newstr = str1.substring(startIndex)+str2
    }else {
        let startIndex = str2.length - str1.length
        newstr = str2.substring(startIndex)+str1
    }
    return newstr
}

console.log(appendString("Welcome", "home"))