/**
 * Write a Java program to insert a dash (-) between an upper case
 * letter and a lower case letter in a given string.
 */

// my solution (incomplete)
function validate(str) {

    return str.replace(/[A-Z]/g, function(chr) {
        return chr+"-"
    })
}

console.log(validate("Python Exercises")); // P-ython E-xercises
console.log(validate("The quick brown Fox jumps over the lazy Dog.")); // T-he quick brown F-ox jumps over the lazy D-og.
console.log(validate("java exercises")); // java exercises
