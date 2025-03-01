/**
 * Write a Java program to test if a given string contains the specified sequence of char values.
Original String: PHP Exercises and Python Exercises                                                           
Specified sequence of char values: and                                                                        
true 
 */

function hasSubstring(str, substr) {
    return str.includes(substr)
}

console.log(hasSubstring("PHP Exercises and Python Exercises", "and"))