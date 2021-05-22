/**
 * Set the hour to 15, according to UTC time:
 */

var d = new Date();
d.setUTCHours(15);
console.log(d);

/**
 * Set the time to 15:35:01 UTC time
 */

d = new Date();
d.setUTCHours(15, 35, 01);
console.log(d);

/**
 * Set the time to 48 hours ago, using UTC methods:
 */

d = new Date();
d.setUTCHours(d.getUTCHours() - 48);
console.log(d);