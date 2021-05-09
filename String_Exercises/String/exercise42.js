/**
 * Write a JavaScript function to uncapitalize each word in the string.
 * Test Data :
 * console.log(unCapitalizeWords('JS STRING EXERCISES'));
 * "js string exercises"
 */

function unCapitalizeWords (str) {
    return str.replace(/\w/gi, function (match){
        return match.toLocaleLowerCase();
    })
}

console.log(unCapitalizeWords('JS STRING EXERCISES'));