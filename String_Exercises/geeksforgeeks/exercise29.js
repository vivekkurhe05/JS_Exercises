/**
 * Extract a number from a string using JavaScript
 */

function extract_num(str) {
    let re = /\d+/g;

    return str.match(re)
}

console.log(extract_num("I have 5 chocolates and You have 2"));