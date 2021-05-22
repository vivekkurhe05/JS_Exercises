/**
 * Return the number of milliseconds since 1970/01/01:
 */

var n = Date.now();
console.log(n);

/**
 * Calculate the number of years since 1970/01/01:
 */

var mins = 1000 * 60;
var hrs = mins * 60;
var days = hrs * 24;
var years = days * 365;

console.log(Math.round(Date.now()/years));