/**
 * Set the day of the month:
 */

var d = new Date();
d.setDate(21);
console.log(d);

//or

console.log(new Date(new Date().setDate(21)));

/**
 * Set the day of the month to be the last day of the previous month:
 */

d = new Date();
d.setDate(0);
console.log(d);

//or
console.log(new Date(new Date().setDate(0)));

/**
 * Set the day of the month, to a specified date:
 */

d = new Date("July 21, 1983 01:15:00");
d.setDate(15);
console.log(d);