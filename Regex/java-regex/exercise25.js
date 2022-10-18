/**
 * Write a Java program to get last n vowels of a given string.
 */

function validate(str, num) {
  let re1 = /[^aeiou]/gi;
  let consonants = str.match(re1).join("");
  let vowels = str.match(/[aeiou]/gi).join("");

  return (consonants + vowels).slice(-num);
}

console.log(validate("Java", 2));
console.log(validate("JavaScript", 2));
console.log(validate("JavaScript", 3));
console.log(validate("SQLite", 2));
console.log(validate("The quick brown fox jumps over the lazy dog.", 2));
console.log(validate("The quick brown fox jumps over the lazy dog.", 3));
console.log(validate("The quick brown fox jumps over the lazy dog.", 15));
