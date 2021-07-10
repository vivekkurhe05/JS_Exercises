/**
 * Write a JavaScript function to calculate the divisor and modulus of two integers.
 */

// your solution

function div_mod () {

    let divisor = Math.floor(arguments[0]/arguments[1])
    let modulus = arguments[0]%arguments[1];

    return [divisor, modulus];
}
console.log(div_mod(17, 4));