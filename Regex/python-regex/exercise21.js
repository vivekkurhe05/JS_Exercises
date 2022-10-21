/**
 * Write a Python program to find the substrings within a string. Go to the editor

Sample text :

'Python exercises, PHP exercises, C# exercises'

Pattern :

'exercises'

Note: There are two instances of exercises in the input string.

output:
Found "exercises"                                                                                             
Found "exercises"                                                                                             
Found "exercises" 
 */

// my solution
let str = "Python exercises, PHP exercises, C# exercises"
let re = /exercises/g;

let arr = str.match(re);
arr.forEach(function(el) {
    console.log(`Found "${el}"`)
})
