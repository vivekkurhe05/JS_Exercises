/**
 * Print the time difference between UTC time and local time in minutes
 */

var d = new Date();
console.log(d.getTimezoneOffset());

/**
 * Print the time difference between UTC time and local time in hours
 */

console.log(d.getTimezoneOffset()/60, 'hours');