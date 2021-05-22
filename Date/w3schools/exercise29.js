/**
 * Set the day of the month, according to UTC:
 */

var d = new Date();
d.setUTCDate(12);
console.log(d);

/**
 * Set the day of the month to be the last day of the previous month:
 */

d = new Date();
d.setUTCDate(0);
console.log(d);

/**
 * Set the day of the month, to a specified date:
 */

d = new Date("July 21, 1983 01:15:00");
d.setUTCDate(15);
console.log(d);