/**
 * How to insert a string at a specific index in JavaScript ?
 */

function insert_str(original, insert) {

    return original.slice(0, 5) + insert + original.slice(5);
}
console.log(insert_str("GeeksGeeks", "For"));