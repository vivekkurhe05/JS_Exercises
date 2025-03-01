/**
 * Write a Java program to compare a given string to a specified string buffer.
Comparing example.com and example.com: true                                                                   
Comparing Example.com and example.com: false 
 */

function compareStrings(str1, str2) {
    let given = new String("example.com")
    let bool = false
    if(given.toString() === str1) {
        bool = true
        return `Comparing ${given} and ${str1}: ${bool}`
    }else{
        return `Comparing ${given} and ${str1}: ${bool}`
    }
}

console.log(compareStrings("example.com"))
console.log(compareStrings("Example.com"))