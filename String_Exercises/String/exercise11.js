/**
 * 
 * Write a JavaScript function to convert a string into camel case.
 * Test Data :
 * console.log(camelize("JavaScript Exercises"));
 * console.log(camelize("JavaScript exercises"));
 * console.log(camelize("JavaScriptExercises"));
 * "JavaScriptExercises"
 * "JavaScriptExercises"
 * "JavaScriptExercises"
 */

function camelize(str){
    let arr = str.trim().split(" ");
    return arr.map(function(chr){
        return chr.charAt(0).toLocaleUpperCase() + chr.substring(1)
    }).join("");
}

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
console.log(camelize("js example sample"));