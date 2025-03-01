/**
 * Write a Java program to return the sum of the digits present 
 * in the given string. In the absence of digits, the sum is 0.
 * 
 * The given string is: ab5c2d4ef12s
The sum of the digits in the string is: 14
 */

function sum(str) {
    const re = /[0-9]/g
    if(str.match(re)) {

        return str.match(re).map((num) => parseInt(num)).reduce((acc, val) => {
            return acc+=val
        },0)
    }else {
        return 0
    }
}

console.log(sum("ab5c2d4ef12s"))
console.log(sum("abcdefs"))