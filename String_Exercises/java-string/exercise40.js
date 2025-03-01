/**
 * Write a Java program to divide a string into n equal parts.
 * 
 * The given string is: abcdefghijklmnopqrstuvwxy
The string divided into 5 parts and they are: 

abcde
fghij
klmno
pqrst
uvwxy
 */

function divideInto5(str) {
    const re = new RegExp("\\w{"+5+"}","g")
    return str.match(re)
}

console.log(divideInto5("abcdefghijklmnopqrstuvwxy"))