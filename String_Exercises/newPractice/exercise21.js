/**
 * Write a JavaScript function to repeat a string a specified times. Go to the editor
Test Data :
console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
Output :
"aaaa"
"Error in string or count."
 */

function repeat_string(chr, count) {

    if(typeof count == 'undefined') return "Error in string or count";

    return chr.repeat(count);
}

console.log(repeat_string('a', 4));
console.log(repeat_string('a'));

/**
 * or
 */

function repeat_string(chr, count) {

    if(typeof count == 'undefined') return "Error in string or count";

    return new Array(count+1).join(chr);
}

console.log(repeat_string('a', 4));
console.log(repeat_string('a'));