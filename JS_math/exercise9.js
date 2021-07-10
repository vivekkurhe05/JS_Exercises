/**
 * Write a JavaScript function to find the GCD (greatest common divisor) of more than 2 integers.
Test Data :
console.log(gcd_more_than_two_numbers([3,15,27]));
console.log(gcd_more_than_two_numbers([5,10,15,25]));
Output :
3
5
 */

// your solution

function gcd_more_than_two_numbers(arr) {

    if(!Array.isArray(arr)) {
        return false;
    }
    let max = Math.max(...arr);
    let numArr = [];

    for(let i=1; i<=max; i++) {
        if(arr[0] % i === 0 && arr[1] % i === 0 && arr[2] % i === 0) {
            numArr.push(i);
        }
    }
    return numArr.reverse()[0];
}
console.log(gcd_more_than_two_numbers([3,15,27]));
console.log(gcd_more_than_two_numbers([5,10,15,25]));
console.log(gcd_more_than_two_numbers(5,10,15,25));