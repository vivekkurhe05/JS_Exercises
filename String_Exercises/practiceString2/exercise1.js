/**
 * 
 * Write a JavaScript function to check whether an `input` is a string or not.
 * Test Data :
 * console.log(is_string('w3resource'));
 * true
 * console.log(is_string([1, 2, 4, 0]));
 * false
 */

function is_string (str) {

    if(typeof str == 'string') return true;
    return false;
}

console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));
console.log(is_string({a:1,b:2}));

//or

function is_string (input) {

    if(Object.prototype.toString.call(input) === '[object String]') return true;
    return false;
}

console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));
console.log(is_string({a:1,b:2}));

//or

function is_string (input) {
    if (input.constructor === String) return true;
    return false;
}

console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));
console.log(is_string({a:1,b:2}));