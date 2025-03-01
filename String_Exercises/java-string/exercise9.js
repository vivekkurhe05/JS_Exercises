/**
 * Write a Java program to compare a given string to the specified character sequence.
Comparing example.com and example.com: true                                                                   
Comparing Example.com and example.com: false
 */

function compareStrings(str1) {
    let given = "example.com"
    
    let bool = false
    if(given === str1) {
        bool = true
        return `Comparing ${given} and ${str1}: ${bool}`
    }else{
        return `Comparing ${given} and ${str1}: ${bool}`
    }
}

console.log(compareStrings("example.com"))
console.log(compareStrings("Example.com"))