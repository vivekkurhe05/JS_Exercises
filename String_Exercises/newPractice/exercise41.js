/**
 * Write a JavaScript function to capitalize each word in the string. Go to the editor
Test Data :
console.log(capitalizeWords('js string exercises'));
"JS STRING EXERCISES"
 */

function capitalizeWords(str) {

    return str.split(" ").map((elem) => {
        return elem.toLocaleUpperCase();
    }).join(' ');
}

console.log(capitalizeWords('js string exercises'));