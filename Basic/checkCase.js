/**
 * Check if a character is lower case
 */

function isLowerCase(chr) {

    if ('a' <= chr && chr <= 'z') {
        return true;
    }
    return false;
}
console.log(isLowerCase('a'));
console.log(isLowerCase('A'));