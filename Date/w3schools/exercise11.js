/**
 * Return the day of the month, according to universal time:
 */

var d = new Date();
console.log(d.getUTCDate());


/**
 * Return the UTC day of the month of a specific, local time, date-time:
 */

d = new Date("July 21, 1983 01:15:00");
console.log(d.getUTCDate());