/**
 * Write a Java program to find the first non-repeating character in a string.
 * 
 * The given string is: gibblegabbler
The first non repeated character in String is: i
 */

// my sol
function firstNonRepeatingChar(str) {
    let obj = {}
    let firstChar = ""
    for(let i=0;i<str.length;i++) {
        if(!(str[i] in obj)) {
            obj[str[i]] = true
            firstChar+=str[i]
        }else {
            obj[str[i]] = false
            firstChar = firstChar.substring(0, firstChar.indexOf(str[i]))+firstChar.substring(firstChar.indexOf(str[i])+1)
        }
    }

    return firstChar[0]
}

console.log(firstNonRepeatingChar("gibblegabbler"))