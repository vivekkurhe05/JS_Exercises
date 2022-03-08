/**
 * Write a JavaScript function to concatenates a given string n times (default is 1). Go to the editor
Test Data :
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));
"Ha!"
"Ha!Ha!"
"Ha!Ha!Ha!"
 */

function repeat(str, count) {

    if(typeof count == 'undefined') count = 1;

    return str.repeat(count);
}

console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));