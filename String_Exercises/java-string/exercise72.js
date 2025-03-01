/**
 * Write a Java program to return true if a given string contains the string 'pop', 
 * but the middle 'o' also may contain another character.
 * 
 * The given string is: dikchapop
Is p?p appear in the given string? true

The given string is: dikp$pdik
Is p?p appear in the given string? true
 */

// my sol
function hasPattern(str) {
    const re = /.*p.p.*/g
    return re.test(str)
    
}

console.log(hasPattern("dikchapop"))
console.log(hasPattern("dikp$pdik"))