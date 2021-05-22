/**
 * Write a JavaScript function to convert a string to title case.
Test Data :
console.log(sentenceCase('PHP exercises. python exercises.'));
"Php Exercises. Python Exercises."
 */

function sentenceCase (str) {
    return str.replace(/\w+/g, function (word) {
        return word.charAt(0).toLocaleUpperCase() + word.slice(1);
    });
}

console.log(sentenceCase('PHP exercises. python exercises.'));