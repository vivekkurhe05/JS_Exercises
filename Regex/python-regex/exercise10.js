/**
 * Write a Python program that matches a word at the beginning of a string.
 */

// my solution
function text_match(str){
    let re = /^[A-Za-z]+/;
    return re.test(str);
}

console.log(text_match("The quick brown fox jumps over the lazy dog.")) // true
console.log(text_match(" The quick brown fox jumps over the lazy dog.")) // false