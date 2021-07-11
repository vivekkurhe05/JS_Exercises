/**
 * Write a JavaScript function to compute the factors of a positive integer.
 */

// your solution

function factors(num) {

    let arr = [];
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(factors(15));
console.log(factors(16));
console.log(factors(17));