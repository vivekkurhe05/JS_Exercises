/**
 * Write a JavaScript function to capitalize the first letter of each word in a string. Go to the editor
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"
 */

function capitalize_Words(str) {

    let arr = str.split(" ");

    return arr.map(function(elem) {
        return elem[0].toLocaleUpperCase() + elem.substring(1);
    }).join(" ");
}

console.log(capitalize_Words('js string exercises'));
