/**
 * Write a JavaScript function to check whether an `input` is an array or not.
 * Test Data :
 * console.log(is_array('w3resource'));
 * console.log(is_array([1, 2, 4, 0]));
 * false
 * true
 */

function is_array (arr) {

    return Array.isArray(arr);
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//or

function is_array (arr) {

    return Object.prototype.toString.call(arr) == '[object Array]'
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
console.log(is_array(1));

//or

function is_array (arr) {

    return arr.constructor == Array
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
console.log(is_array(1));