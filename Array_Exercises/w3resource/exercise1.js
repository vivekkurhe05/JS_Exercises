/**
 * Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true
 */

function is_array(input) {

    return Array.isArray(input);
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

/**
 * or
 */

 function is_array(input) {

    if(toString.call(input) == '[object Array]') return true;
    return false;
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));