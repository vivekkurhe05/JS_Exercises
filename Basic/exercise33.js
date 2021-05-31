/**
 * Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
 */

//wrong logic

function checkRange(num1, num2){
    return (num1 >= 40 && num1 <= 60) && (num2 >= 70 && num2 <= 100);
}
console.log(checkRange(40, 70));