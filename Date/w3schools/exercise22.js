/**
 * Set the year to 2020:
 */

var d = new Date();
d.setFullYear(2020);
console.log(d);

/**
 * Set the date to November 3, 2020:
 */

d.setFullYear(2020, 10, 3);
console.log(d);

/**
 * 
 * Set the date to six months ago:
 */

d.setFullYear(d.getFullYear(), d.getMonth()-6);
console.log(d);