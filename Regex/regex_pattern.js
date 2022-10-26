/**
 * Write a Java program that takes a number and set thousands separator in that number.
 */

// copied from w3resource javascript exercise 21
function validate(str) {
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log(validate("1000"));

/**
 * 
 * 2
 */

// my solution
function camel_to_snake(str) {
    let re = /\B(?=[A-Z](?=\w))/g
    return str.replace(re, "_").replace(/[A-Z]/g, function(chr) {
        return chr.toLocaleLowerCase();
    })
}
console.log(camel_to_snake('PythonExercises'));

/**
 * 
 * 3. Write a Python program to find urls in a string. (exercise-42)
 */
