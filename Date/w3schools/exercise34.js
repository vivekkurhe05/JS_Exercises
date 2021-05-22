/**
 * Set the month to 4 (May):
 */

var d = new Date();
d.setUTCMonth(3);
console.log(d);

/**
 * Set the month to 4 (May) and the day to the 20th:
 */

d = new Date();
d.setUTCMonth(4, 20);
console.log(d);

/**
 * Set the date to be the last day of last month:
 */

d = new Date()
d.setUTCMonth(d.getUTCMonth(), 0);
console.log(d);
