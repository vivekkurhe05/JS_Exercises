/**
 * 
 * Write a JavaScript function to chop a string into chunks of a given length.
 * Test Data :
 * console.log(string_chop('w3resource'));
 * console.log(string_chop('w3resource',2));
 * console.log(string_chop('w3resource',3));
 * ["w3resource"]
 * ["w3", "re", "so", "ur", "ce"]
 * ["w3r", "eso", "urc", "e"]
 */

// incomplete code. You failed to write this function.

function string_chop(str, len){
    let a =[];
    if(len == null) len = 100;
    a = str.substr(0, len);
    return str.substr(len, );
}

console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));