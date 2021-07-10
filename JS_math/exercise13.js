/**
 * Write a JavaScript function to test if a number is a power of 2.
Test Data :
console.log(power_of_2(16));
console.log(power_of_2(18));
console.log(power_of_2(256));
Output :
true
false
true
 */

// your solution

function power_of_2 (num) {
    let bool = false;
    for(let i=0; i<=num; i++) {
        if(Math.pow(2, i) === num){
            bool = true;
            break;
        }
    }
    return bool;
}
console.log(power_of_2(16));
console.log(power_of_2(18));
console.log(power_of_2(256));