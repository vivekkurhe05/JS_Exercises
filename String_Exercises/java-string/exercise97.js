/**
 * Write a Java program to return a string with characters 
 * at index positions 0,1,2,5,6,7, ... from a given string.
 * The given string is: w3resource.com
The new string is: w3rour.co
 */

function formString() {
    let str = "w3resource.com"
    let arr = Array.prototype.slice.call(arguments)
    let newstr=""
    arr.forEach((num) => newstr+=str.charAt(num))
    return newstr
}

console.log(formString(0,1,2,5,6,7,10,11,12))