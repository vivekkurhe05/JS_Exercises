/**
 * Write a JavaScript function to get 24-hour format of an hour without leading zeros.
Test Data :
dt = new Date(1989, 10, 1);
console.log(hours_without_zeroes(dt));
0
 */

// your solution

function hours_without_zeroes(d) {
    return d.getHours();
}
dt = new Date();
console.log(hours_without_zeroes(dt));