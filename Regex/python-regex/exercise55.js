/**
 * Write a Python program to convert a given string to snake case.
 * 
 * output
 * java-script
    gd-script
    btw...-what-*-do*-you-call-that-naming-style?-snake-case?
 */

// not a complete solution
function snake_case(str) {
  let re = /[A-Z]+(?=[A-Z\.])|([A-Z](?=[a-z]))/g;
  return str
    .replace(re, function (chr) {
      return "-" + chr.toLowerCase();
    })
    .replace("-", "");
}

console.log(snake_case("JavaScript"));
console.log(snake_case("GDScript"));
console.log(
  snake_case("BTW...what *do* you call that naming style? snake_case? ")
);
