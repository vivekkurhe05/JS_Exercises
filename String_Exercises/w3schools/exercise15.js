/**
 * Split a string into an array of substrings:
 */

 var str = "How are you doing today?";

 var arr = str.split(" ");
 console.log(arr);

 /**
  * Omit the separator parameter:
  */

 var arr2 = str.split();
 console.log(arr2);


/**
 * Separate each character, including white-space:
 */

var arr3 = str.split("");
console.log(arr3);

/**
 * Use the limit parameter: 3
 */

var arr4 = str.split(" ", 3);
console.log(arr4);

/**
 * Use a letter as a separator: o
 */

var arr5 = str.split("o");
console.log(arr5);