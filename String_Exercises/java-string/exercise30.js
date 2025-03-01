/**
 * Write a Java program to convert all characters in a string to uppercase without using built in func.
Original String: The Quick BroWn FoX!                                                                         
String in uppercase: THE QUICK BROWN FOX!  
 */

// my sol
function toUpperCase(str) {
    let upperCase = ""
    for(let i=0;i<str.length;i++) {
        if(str[i] >= 'a' && str[i] <= 'z') {
            upperCase += String.fromCharCode(str[i].charCodeAt() - 32)
        }else{
            upperCase+=str[i]
        }
    }
    return upperCase
}

console.log(toUpperCase("The Quick BroWn FoX!"))