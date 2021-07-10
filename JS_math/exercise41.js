/**
 * Write a JavaScript function to count the digits of an integer.
 */

// your solution

function count_digits (num) {
    let count = 0;
    if(!Number.isInteger(num)) {
        return "Not a Number";
    }

    while(num) {
        num = Math.floor(num/10);
        count++;
    }
    return count;
}

console.log(count_digits(767732));
console.log(count_digits(456));