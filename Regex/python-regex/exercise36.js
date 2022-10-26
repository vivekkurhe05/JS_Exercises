/**
 * Write a python program to convert camel case string to snake case string.
 */

// my solution
function camel_to_snake(str) {
    let re = /\B(?=[A-Z](?=\w))/g
    return str.replace(re, "_").replace(/[A-Z]/g, function(chr) {
        return chr.toLocaleLowerCase();
    })
}
console.log(camel_to_snake('PythonExercises'));