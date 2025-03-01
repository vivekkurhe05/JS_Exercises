/**
 * Write a Java program to make an original string made of p number of 
 * characters from the first character in a given string. 
 * This is followed by p-1 number of characters till p is greater than zero.
 * 
 * The given string is: welcome
Number of repetition characters and repetition: 4
The new string is: welcwelwew
 */

// my sol
function chars(str) {
    let newstr=""
    for(let i=4;i>0;i--) {
        newstr+=str.substring(0, i)
    }
    return newstr
}

console.log(chars("welcome"))