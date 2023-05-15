/**
 * Write a Python program to add 'ing' at the end of a given string (length should be at least 3). 
 * If the given string already ends with 'ing', add 'ly' instead. If the string length of the given string is less than 3, leave it unchanged.
Sample String : 'abc'
Expected Result : 'abcing'
Sample String : 'string'
Expected Result : 'stringly'
 */

// my solution
function addString(str) {
    if(str.length < 3) return str
    else if (str.length>=3 && str.endsWith("ing")) str += "ly"
    else if (str.length>=3 && !str.endsWith("ing")) str+="ing"

    return str
}

console.log(addString("abc"))
console.log(addString("abcing"))
console.log(addString("string"))
console.log(addString("ab"))