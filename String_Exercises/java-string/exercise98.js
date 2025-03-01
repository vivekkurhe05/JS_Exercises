/**
 * Write a Java program to check whether the first instance of a given character is 
 * immediately followed by the same character in a given string.
 * 
 * The given string is: fizzez
Is 'z' appear twice respectively? true
 */

function checkInstance(str, char) {
    let index = str.indexOf(char)
    if(str[index]===str[index+1]) return true
    return false
}

console.log(checkInstance("fizzez","z"))