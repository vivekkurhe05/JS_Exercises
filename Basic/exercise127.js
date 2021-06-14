/**
 * Write a JavaScript program to reverse the order of the bits in a given integer.
56 -> 111000 after reverse 7 -> 111
234 -> 11101010 after reverse 87 -> 1010111
 */

// your solution

function mirror_bits_into_decimal(num) {
    /**
     * this coverts decimal to binary
     */
    let join = '';
    while (num > 0) {
        let rem = Math.floor(num % 2);
        join = rem + join;
        num = Math.floor(num / 2);
    }
    /**
     * it reverses and converts binary to decimal
     */
    let binary = Array.from(join).reverse().join("");
    return parseInt(binary, 2);
}
console.log(mirror_bits_into_decimal(56));
console.log(mirror_bits_into_decimal(234));

/**
 * w3resource solution
 */

function mirror_bits(n) {
    return parseInt(n.toString(2).split("").reverse().join(""), 2);
}

console.log(mirror_bits(56));
console.log(mirror_bits(234));