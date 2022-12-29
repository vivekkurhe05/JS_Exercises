/**
 * How to create half of the string in uppercase and the other half in lowercase?
 */

// my solution
function half_str(str) {
    let n = str.length;
    let num = Math.round(n/2);
    let first_half = str.slice(0, num).toUpperCase();
    return first_half + str.slice(num);
}

console.log(half_str('geeksforgeeks'));
console.log(half_str('mahindra'));