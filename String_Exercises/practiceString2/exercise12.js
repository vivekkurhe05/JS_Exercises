/**
 * Write a JavaScript function to uncamelize a string.
 * Test Data :
 * console.log(uncamelize('helloWorld'));
 * console.log(uncamelize('helloWorld','-'));
 * console.log(uncamelize('helloWorld','_'));
 * "hello world"
 * "hello-world"
 * "hello_world"
 */

//  function uncamelize(str, specChr=" "){
//     let arr = str.trim().split("");
//     return arr.map(function(chr){
//         return chr == chr.toLocaleUpperCase() ? specChr+chr.toLocaleLowerCase() : chr.toLocaleLowerCase();
//     }).join("");
// }

// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld', '-'));
// console.log(uncamelize('helloWorld', '_'));

//or

function uncamelize (str, separator) {
    if (typeof separator == 'undefined') separator = " ";
    return str.replace(/[A-Z]/g, function (letter) {
        return separator + letter.toLowerCase();
    })
}

console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld', '-'));
console.log(uncamelize('helloWorld', '_'));