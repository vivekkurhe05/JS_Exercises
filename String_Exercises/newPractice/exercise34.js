/**
 * Write a JavaScript function to convert a string to title case. Go to the editor
Test Data :
console.log(sentenceCase('PHP exercises. python exercises.'));
"Php Exercises. Python Exercises."
 */

function sentenceCase(str) {

    let arr = str.split(" ");
    return arr.map(function(elem) {
        return elem.charAt(0).toLocaleUpperCase() + elem.substring(1);
    }).join(" ");
}

console.log(sentenceCase('PHP exercises. python exercises.'));