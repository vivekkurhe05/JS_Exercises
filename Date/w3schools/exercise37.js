/***
 * Return the Date object as a string, using locale conventions:
 */

 var d = new Date();
 var n = d.toLocaleDateString();
 console.log(n);

 /**
  * Return the time portion of a Date object as a string, using locale conventions:
  */

 d = new Date();
 n = d.toLocaleTimeString();
 console.log(n);

 /***
 * Convert a Date object to a string, using locale conventions:
 */

var d = new Date();
var n = d.toLocaleString();
console.log(n);