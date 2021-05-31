/**
 * Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
 */

function positive_negative(num1, num2) {
    if(num1 > 0 && num2 > 0){
        return false
    }
    else if(num1 < 0 && num2 < 0){
        return false
    }
    else{
        return true
    }   
}
console.log(positive_negative(1, 2));
console.log(positive_negative(-1, 2));
console.log(positive_negative(1, -2));
console.log(positive_negative(-1, -2));