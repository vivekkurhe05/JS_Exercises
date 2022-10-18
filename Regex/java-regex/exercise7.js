/**
 * Write a Java program that matches a word containing 'g', not at the start or end of the word.
 */

// my solution
function validate(str) {
  let re = /\Bg\B/g;
  return re.test(str);
}

console.log(validate("The quick brown fox jumps over the lazy dog.")); // false
console.log(validate("Java Exercises.")); // false
console.log(validate("Programming Language")); // true
console.log(validate("Do humans eat gizzards?")); // false
console.log(validate("PostgreSQL")); // true