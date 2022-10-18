/**
 * Write a Java program to remove the specific letters from a string and return the new string. 
 * Specific letters: "p", "q", or "r".

If the given string does not contain "p", "q", or "r", return “Not found.”
 */

// my solution
function validate(str) {
  let new_str = "";
  let re = /[pqr]/gi;
  if (str.match(/[pqr]/g) != null) {
    new_str = str.replace(re, "");
  } else {
    new_str = "Not found.";
  }
  return new_str;
}

console.log(validate("The quick brown fox jumps over the lazy dog."));
console.log(validate("Java Exercises."));
console.log(validate("Java linkedlist."));
