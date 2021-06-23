/**
 * Write a JavaScript program to compute the sum of all digits that occur in a given string.
 */

// your solution

function sum_digits_from_string(str) {
    let sum = 0;
    for(let i=0; i<str.length; i++) {
        if(isFinite(str[i])){
            sum += eval(str[i]);
        }
    }
    return sum;
}
console.log(sum_digits_from_string("abcd12efg9"))
console.log(sum_digits_from_string("w3resource"))