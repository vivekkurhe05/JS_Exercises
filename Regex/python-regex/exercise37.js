/**
 * Write a python program to convert snake case string to camel case string.
 */

// my solution
function snake_to_camel(str){
    let re = /(\b|_)[a-z]/g
    return str.replace(re, function(chr) {
        return chr.toLocaleUpperCase();
    }).replace("_", "");
}
console.log(snake_to_camel('python_exercises'))