/**
 * Write a JavaScript function to truncates a string if it is longer than the specified number of characters. 
 * Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.
 * Test Data :
 * console.log(text_truncate('We are doing JS string exercises.'))
 * console.log(text_truncate('We are doing JS string exercises.',19))
 * console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
 * "We are doing JS string exercises."
 * "We are doing JS ..."
 * "We are doing !!"
 */

function text_truncate (str, numOfChars, specialSymbol) {

    if(typeof specialSymbol == 'undefined') specialSymbol = '...';
    if(typeof numOfChars == 'undefined') return str;

    let str1 = str.substr(0, numOfChars);
    let str2 = str1.length-specialSymbol.length;

    return str1.substr(0, str2) + specialSymbol;
}

console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))