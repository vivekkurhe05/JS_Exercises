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

/**
 * 4. Write a Python program to remove the ANSI escape sequences from a string. (exercise-45)
 */

/**
 * 5. Write a Python program to split a string with multiple delimiters. (exercise-47)
 */

/**
 * 6. Write a Python program to check a decimal with a precision of 2. (exercise-48)
 */