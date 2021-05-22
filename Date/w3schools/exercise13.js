/**
 * Return the year, according to universal time:
 */

var d = new Date();
console.log(d.getUTCFullYear());

/**
 * Return the UTC year of a specific date:
 */

d = new Date("July 21, 1983 01:15:00");
console.log(d.getUTCFullYear());