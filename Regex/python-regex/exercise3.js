/**
 * Write a Python program that matches a string that has an a followed by one or more b's
 */

// w3resource solution
function text_match(str){
    let re = /^ab+/;
    return re.test(str);
}
console.log(text_match("abb"))
console.log(text_match("abc"))