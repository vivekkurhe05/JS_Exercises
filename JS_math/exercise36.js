/**
 * Write a JavaScript function which will return values that are powers of two.
Test Data :
console.log(isPower_of_two(64));
true
console.log(isPower_of_two(94));
false
 */

function isPower_of_two (num) {
    let b = false;
    for(let i=0; i<=num; i++) {
        if(Math.pow(2, i) === num) {
            b= true;
            break;
        }
    }
    return b;
}

console.log(isPower_of_two(64));
console.log(isPower_of_two(94));