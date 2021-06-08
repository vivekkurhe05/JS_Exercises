/**
 * Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... 
 * where n is a positive integer and all divisions are integer.
 */

/**
 * w3resource solution
 */

function int_sum(num) {
    let sum = 0;
    while(num > 0) {
        sum += num;
        num = Math.floor(num/2);
    }
    return sum;
}
console.log(int_sum(8));
console.log(int_sum(9))
console.log(int_sum(26))