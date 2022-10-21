/**
 * Write a Python program that matches a string that has an a followed by two to three 'b'
 */

// my solution
function text_match(str){
    let re = /ab{2,3}/;
    return re.test(str);
}

console.log(text_match("ab")) // false
console.log(text_match("aabbbbbc")) // true