/**
 * Write a Python program to find the first appearance of the substrings 'not' and 'poor' in a given string.
If 'not' follows 'poor', replace the whole 'not'...'poor' substring with 'good'. Return the resulting string.
Sample String : 'The lyrics is not that poor!'
Expected Result : 'The lyrics is good!'
Sample String : 'The lyrics is poor!'
Expected Result : 'The lyrics is poor!'
 */

// my solution  
function notPoor(str) {
    if(str.includes("not that poor")) {
        str = str.replace(str.substring(str.indexOf("not that poor")), "good!")
    } 

    return str
}

console.log(notPoor("The lyrics is not that poor!"))
console.log(notPoor("The lyrics is poor!"))