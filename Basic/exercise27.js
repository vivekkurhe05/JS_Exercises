/**
 * Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.
 */

function startsWith(str) {
    return str.indexOf('Java') === 0;
}
console.log(startsWith('Java programming'));
console.log(startsWith('JavaScript programming'));
console.log(startsWith("C programming"));