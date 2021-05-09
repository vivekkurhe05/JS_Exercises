/**
 * Write a JavaScript function to chop a string into chunks of a given length.
 * Test Data :
 * console.log(string_chop('w3resource'));
 * console.log(string_chop('w3resource',2));
 * console.log(string_chop('w3resource',3));
 * ["w3resource"]
 * ["w3", "re", "so", "ur", "ce"]
 * ["w3r", "eso", "urc", "e"]
 */

// You failed to write this function.

// function string_chop(str, size) {
//     let arr = [];

//     if(str.length > 2) arr.push(str.substr(0,size), str.substr(size));
//     return arr;
// }

function string_chop(str, size) {
    if (str == null) return [];
    str = String(str);
    size = ~~size // same as Math.floor(size);
    return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}

console.log(string_chop('w3resource'));
console.log(string_chop('w3resource', 2));
console.log(string_chop('w3resource', 3));