/**
 * Write a JavaScript function to convert a number from one base to another.
Note : Both bases must be between 2 and 36.
Test Data :
console.log(base_convert('E164',16,8));
console.log(base_convert(1000,2,8));
"160544"
"10"
 */

// w3resource solution

function base_convert (num, initial_base, change_base) {
    return parseInt(num, initial_base).toString(change_base);
}
console.log(base_convert('E164',16,8));
console.log(base_convert(1000,2,8));
