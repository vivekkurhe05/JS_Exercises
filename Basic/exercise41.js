/**
 * Write a JavaScript program to check three given numbers, 
 * if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.
 */

// your solution

function checkNumbers(num1, num2, num3) {
    if (num1 == num2 && num2 == num3 && num3 == num1) return 30;
    if (num1 == num2 || num2 == num3 || num3 == num1) return 40;
    else
        return 20;
}
console.log(checkNumbers(1, 1, 1));
console.log(checkNumbers(1, 2, 2));
console.log(checkNumbers(1, 2, 3));