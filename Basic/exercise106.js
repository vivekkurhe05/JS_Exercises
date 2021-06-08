/**
 * Write a JavaScript program to find the number of times to replace a given number 
 * with the sum of its digits until it convert to a single digit number.
 */

// your solution

function divide_digit(num, n) {

    while(num%n == 0){
        if(n==1) return num;
        num = num/n;   
    }
    return num;
}
console.log(divide_digit(-12, 2));
console.log(divide_digit(13, 2));
console.log(divide_digit(13, 1));
console.log(divide_digit(18, 2));