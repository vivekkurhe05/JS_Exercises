/**
 * Write a Python program that takes a string with some words. For two consecutive words in the said string, check whether the first word ends with a vowel and the next word begins with a vowel. If the program satisfy the said condition, return true other false. Only one space is allowed between the words.
 */

// my solution
function test(str) {
    let re = /[aeiou]\b[ ]\b[aeiou]/gi;
    return re.test(str);
}

console.log(test('These exercises can be used for practice.')); // true
console.log(test('Following exercises should be removed for practice.')); // false
console.log(test('abcd dkise eosksu')); // true