/**
 * Check if a string ends with "universe.":
 */

 var str = "Hello world, welcome to the universe.";
 var res = str.endsWith("universe.");
 console.log(res);

 /**
  * Check if a string ends with "world", assuming the string is 11 characters long:
  */

 var res2 = str.endsWith("world", 11);
 console.log(res2);