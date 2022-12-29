/**
 * How to pad a string to get the determined length using JavaScript ?
 */

// my solution
function pad_string(str, mask, n) {

    while(str.length < n) {
        str = mask + str;
    }

    return str;
}
console.log(pad_string('abcdefg', '*', 10));
console.log(pad_string('1234', '^#', 10));