/**
 * Write a Python program to search some literals strings in a string. Go to the editor
Sample text : 'The quick brown fox jumps over the lazy dog.'
Searched words : 'fox', 'dog', 'horse'
 */

function text_match(str){
    return str.match(/(fox|dog|horse)/g).join(",")
}
console.log(text_match("The quick brown fox jumps over the lazy dog."))