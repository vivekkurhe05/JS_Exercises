/**
 * Write a Python program to insert spaces between words starting with capital letters.
 */

// my solution
function capital_words_spaces(str){

    let re = /\B(?=[A-Z]\w)/g;

    return str.replace(re, " ");
}

console.log(capital_words_spaces("Python"));
console.log(capital_words_spaces("PythonExercises"));
console.log(capital_words_spaces("PythonExercisesPracticeSolution"));