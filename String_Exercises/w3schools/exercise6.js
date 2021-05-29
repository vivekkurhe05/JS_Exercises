/**
 * Check if a string includes "world":
 */

var str = "Hello world, welcome to the universe.";
var res = str.includes("world");
console.log(res);

/**
 * Check if a string includes "world", starting the search at position 12:
 */

var res2 = str.includes("world", 12);
console.log(res2);