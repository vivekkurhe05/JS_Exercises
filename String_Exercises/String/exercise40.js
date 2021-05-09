/**
 * Write a JavaScript function to Uncapitalize the first letter of each word of a string.
 * Test Data :
 * console.log(unCapitalize_Words('Js String Exercises'));
 * "js string exercises"
 */

function unCapitalize_Words (str) {
    return str.replace(/\w+/g, function (match) {
        return match.charAt(0).toLocaleLowerCase() + match.slice(1);
    })
}

console.log(unCapitalize_Words('Js String Exercises'));