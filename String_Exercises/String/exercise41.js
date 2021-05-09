/**
 * Write a JavaScript function to capitalize each word in the string.
 * Test Data :
 * console.log(capitalizeWords('js string exercises'));
 * "JS STRING EXERCISES"
 */

function capitalizeWords (str) {
    return str.replace(/\w/gi, function (match){
        return match.toLocaleUpperCase();
    })
}

console.log(capitalizeWords('js string exercises'));