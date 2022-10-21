/**
 * Write a Python program that matches a word at the end of a string, with optional punctuation.
 */

// my solution
function text_match(str){
    let re = /^[A-Za-z\s]+\.$/g;
    return re.test(str);
}
console.log(text_match("The quick brown fox jumps over the lazy dog.")) // true
console.log(text_match("The quick brown fox jumps over the lazy dog. ")) // false
console.log(text_match("The quick brown fox jumps over the lazy dog ")) // false
