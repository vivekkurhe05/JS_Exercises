/**
 * Write a Java program to create a new string taking specified 
 * number of characters from first and last position of a given string.
 * 
 * The given strings is: Welcome
The given numbers is: 3
The new string is: Welome
 */

// my sol
function createString(str, num) {
    let str1 = str.substring(0,num)
    let str2 = str.slice(-num)
    return str1+str2
}

console.log(createString("Welcome", 3))