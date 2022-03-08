/**
 * Write a JavaScript function to convert a string into camel case.Go to the editor
Test Data :
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
"JavaScriptExercises"
"JavaScriptExercises"
"JavaScriptExercises"
 */

function camelize(str) {

    let arr = str.trim().split(" ");

    return arr.map(function(elem) {
        return elem.charAt(0).toLocaleUpperCase() + elem.substring(1);
    }).join("");
}

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));