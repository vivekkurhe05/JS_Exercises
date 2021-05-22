/**
 * Return the month, according to universal time:
 */

var d = new Date();
console.log(d.getUTCMonth());

/**
 * Return the name of the month, according to universal time (not just a number):
 */

var months = [
    "January","February","March","April","May","June","July","August","September","October","November","December"
];

console.log(months[d.getUTCMonth()]);