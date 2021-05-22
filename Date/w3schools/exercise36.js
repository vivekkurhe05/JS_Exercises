/**
 * Convert today's date into a readable string:
 */

var d = new Date();
var n = d.toDateString();
console.log(n);

/**
 * Return a Date object as a String, using the ISO standard:
 */

 var d = new Date();
 var n = d.toISOString();
 console.log(n);

 /**
 * Return a Date object as a String, formatted as a JSON date:
 */

var d = new Date();
var n = d.toJSON();
console.log(n);