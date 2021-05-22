/**
 * Set the month to 4 (May):
 */

var d = new Date();
d.setMonth(4);
console.log(d)

/***
 * Set the month to 4 (May) and the day to the 20th:
 */

d = new Date();
d.setMonth(4, 20);
console.log(d);

/**
 * Set the date to be the last day of last month:
 */

d = new Date();
d.setMonth(d.getMonth(), 0);
console.log(d);