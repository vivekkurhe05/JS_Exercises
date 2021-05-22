/**
 * Convert a Date object to a string, according to universal time:
 */

var d = new Date();
var n = d.toUTCString();
console.log(n);