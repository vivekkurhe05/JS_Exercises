/**
 * Write a JavaScript function to truncate a string to a certain number of words.
 * Test Data :
 * console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
 * Output :
 * "The quick brown fox"
 */

function truncate (str, count) {
    return str.trim().split(' ', count).join(' ');
}

console.log(truncate('The quick brown fox jumps over the lazy dog', 4));

//or

function truncate (str, count) {
    return str.trim().split(' ').splice(0, count).join(' ');
}

console.log(truncate('The quick brown fox jumps over the lazy dog', 4));