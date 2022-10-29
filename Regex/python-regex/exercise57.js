/**
 * Write a Python program that checks whether a word stars and ends with a vowel in a given string. Return true if a word matches the condition; otherwise, return false.
 */

// my solution
function isVowel(str) {
    let re = /\b[aeiou]\w+[aeiou]\b/gi;
    return re.test(str);    
}

console.log(isVowel('Red Orange White')); // true
console.log(isVowel('Red White Black')); // false
console.log(isVowel('abcd dkise eosksu')); // true