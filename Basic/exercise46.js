/**
 * Write a JavaScript program to check two given non-negative integers 
 * that whether one of the number (not both) is multiple of 7 or 11.
 */

function isMultiple(num1, num2){
    if(num1 % 7 == 0 || num2 % 7 == 0) return true;
    if(num2 % 11 == 0 || num2 % 11 == 0) return true;
    else 
        return false;
}

console.log(isMultiple(21, 43));
console.log(isMultiple(20, 44));
console.log(isMultiple(21, 44));
console.log(isMultiple(19, 23));