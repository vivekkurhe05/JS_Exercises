/**
 * Write a JavaScript function to get the greatest common divisor (gcd) of two integers.
Note :
According to Wikipedia - In mathematics, the greatest common divisor (gcd) of two or more integers, 
when at least one of them is not zero, is the largest positive integer that divides the numbers without a remainder. 
For example, the GCD of 8 and 12 is 4.

Test Data :
console.log(gcd_two_numbers(12, 13));
console.log(gcd_two_numbers(9, 3));
Output :
1
3
 */

// your solution

function gcd_two_numbers(num1, num2) {
    let max = Math.max(num1, num2);
    let arr = [];
    for(let i=1; i<=max; i++){
        if(num1 % i === 0 && num2 % i === 0){
            arr.push(i);
        }
    }
    return arr.reverse()[0];
}
console.log(gcd_two_numbers(12, 13));
console.log(gcd_two_numbers(9, 3));
console.log(gcd_two_numbers(24, 32));