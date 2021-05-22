/**
 * Set the year to 1992:
 */

var d = new Date();
d.setUTCFullYear(1992);
console.log(d);

/**
 * Set the date to November 3, 2020:
 */

d = new Date();
d.setUTCFullYear(2020, 10, 3);
console.log(d);

/**
 * Set the date to six months ago, UTC time:
 */

d = new Date();
d.setUTCFullYear(d.getUTCFullYear(), d.getUTCMonth() - 6);
console.log(d);