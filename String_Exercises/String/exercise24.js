/**
 * 
 * Write a JavaScript function to truncate a string to a certain number of words.
 * Test Data :
 * console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
 * Output :
 * "The quick brown fox"
 */

function truncate(str, len){
    return str.trim().split(" ", len).join(' ');
}

console.log(truncate('The quick brown fox jumps over the lazy dog', 6));