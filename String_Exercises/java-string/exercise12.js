/**
 * Write a Java program to check whether a given string ends with another string.
"Python Exercises" ends with "se"? false                                                                      
"Python Exercise" ends with "se"? true
 */

function endsWith(str, substr) {
    return str.substring(str.lastIndexOf(substr)).length === substr.length
}

console.log(endsWith("Python Exercises", "se"))
console.log(endsWith("Python Exercise", "se"))