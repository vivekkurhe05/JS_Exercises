/**
 * Write a Java program to get last n vowels of a given string.
 */

function validate(str, num) {
  let re1 = /[^aeiou]/gi;
  let consonants = str.match(re1).join("");
  let vowels = str.match(/[aeiou]/gi).join("");
  let sub_str = (consonants + vowels).slice(-num);

  if (num !== sub_str.match(/[aeiou]/gi).length) {
    return "Number of vowels mismatch!!!";
  } else {
    return sub_str;
  }
}

console.log(validate("Java", 2));
console.log(validate("JavaScript", 2));
console.log(validate("JavaScript", 3));
console.log(validate("SQLite", 2));
console.log(validate("The quick brown fox jumps over the lazy dog.", 2));
console.log(validate("The quick brown fox jumps over the lazy dog.", 3));
console.log(validate("The quick brown fox jumps over the lazy dog.", 15));

// or
// my solution
function validate2(str, n) {
  let re = /[aeiou]/gi;
  return str.match(re).slice(-n);
}

console.log(validate2("Java", 2));
console.log(validate2("JavaScript", 2));
console.log(validate2("JavaScript", 3));
console.log(validate2("SQLite", 2));
console.log(validate2("The quick brown fox jumps over the lazy dog.", 2));
console.log(validate2("The quick brown fox jumps over the lazy dog.", 3));
console.log(validate2("The quick brown fox jumps over the lazy dog.", 15));