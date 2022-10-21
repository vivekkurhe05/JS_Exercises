/**
 * Write a Java program to add a dash before and after every vowel in a given string.
 * el == "a" || el == "A" || el == "e" || el == "E" || el == "i" || el == "I" || el == "o" || el == "O" || el == "u" || el == "U"
 */

// my solution
function validate(str) {
  let re = /aeiou]/gi;

  let arr = str.split("");

  return arr
    .map(function (el) {
      if (
        el == "a" ||
        el == "A" ||
        el == "e" ||
        el == "E" ||
        el == "i" ||
        el == "I" ||
        el == "o" ||
        el == "O" ||
        el == "u" ||
        el == "U"
      ) {
        return "-" + el + "-";
      } else {
        return el;
      }
    })
    .join("");
}

console.log(validate("C++")); // C++
console.log(validate("Java")); // J-a-v-a-
console.log(validate("MID-CENTRALIZED")); // M-I-D-C-E-NTR-A-L-I-Z-E-D
console.log(validate("LOWERED")); // L-O-W-E-R-E-D
