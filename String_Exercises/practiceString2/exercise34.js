/**
 * Write a JavaScript function to convert a string to title case.
 * Test Data :
 * console.log(sentenceCase('PHP exercises. python exercises.'));
 * "Php Exercises. Python Exercises."
 */

function sentenceCase (str) {
    return str.replace(/\w\S*/g, function (words) {
        return words.charAt(0).toLocaleUpperCase() + words.substring(1);
    }) 
}

console.log(sentenceCase('PHP exercises. python exercises.'));