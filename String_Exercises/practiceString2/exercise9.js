/**
 * Write a JavaScript function to capitalize the first letter of each word in a string.
 * Test Data :
 * console.log(capitalize_Words('js string exercises'));
 * "Js String Exercises"
 */

function capitalize_Words (str) {

    return str.split(' ').map(function (words) {
        return words.charAt(0).toLocaleUpperCase() + words.slice(1);
    }).join(' ');
}

console.log(capitalize_Words('js string exercises'));

//or

function capitalize_Words(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(capitalize_Words('js string exercises'));