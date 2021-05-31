/**
 * Write a JavaScript program to find the larger number from the two given positive integers, 
 * the two numbers are in the range 40..60 inclusive.
 */

function getMax(a, b) {

    if(a >= 40 && b <= 60) {
        if (a > b) return a;
        else
            return b;
    }
    return 'Number is out of range';
}
console.log(getMax(40, 60));
console.log(getMax(39, 55));
console.log(getMax(55, 61));