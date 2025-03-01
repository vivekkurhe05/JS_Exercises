/**
 * Write a Java program to convert all characters in a string to lowercase without using built in func
Original String: The Quick BroWn FoX!                                                                         
String in lowercase: the quick brown fox!
 */

// my sol
function toLowerCase(str) {
    let lowerCase = ""
    for(let i=0;i<str.length;i++) {
        if(str[i] >= "A" && str[i] <= "Z") {
            lowerCase+=String.fromCharCode(str[i].charCodeAt() + 32)
        }else{
            lowerCase+=str[i]
        }
    }
    return lowerCase
}

console.log(toLowerCase("The Quick BroWn FoX!"))