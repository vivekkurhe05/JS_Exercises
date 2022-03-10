/**
 * Write a JavaScript function to uncapitalize each word in the string. Go to the editor
Test Data :
console.log(unCapitalizeWords('JS STRING EXERCISES'));
"js string exercises"
 */

function unCapitalizeWords(str) {

    return str.split(' ').map((elem) => {
        return elem.toLocaleLowerCase();
    }).join(' ');
}

console.log(unCapitalizeWords('JS STRING EXERCISES'));