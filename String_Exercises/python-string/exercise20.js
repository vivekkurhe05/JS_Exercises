/**
 * Write a Python function to reverse a string if its length is a multiple of 4.
 */

// my solution
function reverseString(str) {
    if(str.length%4===0) return str.split("").reverse().join("")
    return str
}

console.log(reverseString("abcd"))
console.log(reverseString("python"))