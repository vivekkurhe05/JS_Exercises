/**
 * Write a JavaScript function to extract a specified number of characters from a string. Go to the editor
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"
 */

function truncate_string(str, len) {

    return str.substr(0, len)
}

console.log(truncate_string("Robin Singh",4));
