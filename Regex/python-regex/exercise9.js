/**
 * Write a Python program that matches a string that has an 'a' followed by anything, ending in 'b'
 */

// my solution
function text_match(str){
    let re = /^a.+b$/;
    return re.test(str);
}
console.log(text_match("aabbbbd")) // false
console.log(text_match("aabAbbbc")) // false
console.log(text_match("accddbbjjjb")) // true