/**
 * Write a Java program to match a string that contains only
 * upper and lowercase letters, numbers, and underscores.
 */

// my solution
function validate(str) {
  let re = /^\w+$/g;
  return re.test(str);
}

console.log(validate("The quick brown fox jumps over the lazy dog.")); // false
console.log(validate("Java_Exercises_1")); // true
console.log(validate("Java_Exercises_11.0")); // false
console.log(validate("w3r")); // true

// or
// my solution
function validate2(str) {
  let re = /^[A-Za-z0-9_]+$/g;
  return re.test(str);
}

console.log(validate2("The quick brown fox jumps over the lazy dog.")); // false
console.log(validate2("Java_Exercises_1")); // true
console.log(validate2("Java_Exercises_11.0")); // false
console.log(validate2("w3r")); // true
