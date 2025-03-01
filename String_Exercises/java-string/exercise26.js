/**
 * Write a Java program to check whether a given string starts with another string.
Red is favorite color. starts with Red? true                                                                  
Orange is also my favorite color. starts with Red? false
 */

function startsWith(str, substr) {
    return str.indexOf(substr) === 0
}

console.log(startsWith("Red is favorite color. starts with Red?", "Red"))
console.log(startsWith("Orange is also my favorite color. starts with Red", "Red"))