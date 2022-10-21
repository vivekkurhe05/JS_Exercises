/**
 * Write a Python program that matches a string that has an a followed by three 'b'
 */

// my solution
function text_match(str){
    let re = /ab{3}/;
    return re.test(str);
}

console.log(text_match("abbb")) // true
console.log(text_match("aabbbbbc")) // true
console.log(text_match("abbc"))