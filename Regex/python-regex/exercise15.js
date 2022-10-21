/**
 * Write a Python program where a string will start with a specific number
 */

// my solution
function match_num(str){
    let re = /^5-\d+/;
    return re.test(str);
}
console.log(match_num('5-2345861')) // true
console.log(match_num('6-2345861')) // false