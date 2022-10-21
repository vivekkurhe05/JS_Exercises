/**
 * Write a Python program that matches a string that has an a followed by zero or more b's.
 */

// w3resource solution
function text_match(str){
    let re = /^a(b*)$/g;
    return re.test(str);
}

console.log(text_match("ac")) // false
console.log(text_match("abc")) // false
console.log(text_match("a")) // true
console.log(text_match("ab")) // true
console.log(text_match("abb")) // true