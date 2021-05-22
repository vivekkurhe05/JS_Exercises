/**
 * Print the milliseconds since January 1, 1970
 */

var d = new Date();
console.log(d.getTime());


/**
 * Print the number of years since 1970
 */

var mn = 1000 * 60;
var hr = mn * 60;
var day = hr * 24;
var year = day * 365;

var t = d.getTime();

console.log(Math.round(t/year)+' years since 1970');