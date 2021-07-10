/**
 * Write a JavaScript function to convert a binary number to a decimal number.
Test Data :
console.log(bin_to_dec('110011'));
console.log(bin_to_dec('100'));
51
4
 */

// w3resource solution

function bin_to_dec (binary) {
    return parseInt(binary, 2).toString(10)
}
console.log(bin_to_dec('110011'));
console.log(bin_to_dec('100'));