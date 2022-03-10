/**
 * Write a JavaScript function to Uncapitalize the first letter of each word of a string. Go to the editor
Test Data :
console.log(unCapitalize_Words('Js String Exercises'));
"js string exercises"
 */

function unCapitalize_Words(str) {

    return str.split(" ").map(function(elem) {
        return elem.charAt(0).toLocaleLowerCase() + elem.substr(1);
    }).join(' ');
}

console.log(unCapitalize_Words('Js String Exercises'));