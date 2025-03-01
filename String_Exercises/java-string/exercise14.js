/**
 * Write a Java program to compare a given string to another string, ignoring case considerations.
"Stephen Edwin King" equals "Walter Winchell"? false                                                          
"Stephen Edwin King" equals "stephen edwin king"? true 
 */

function equalsIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase()
}

console.log(equalsIgnoreCase("Stephen Edwin King","Walter Winchell"))
console.log(equalsIgnoreCase("Stephen Edwin King","stephen edwin king"))