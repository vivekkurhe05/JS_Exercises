/**
 * Print the day of the week
 * Sunday is 0, Monday is 1, so on..
 */

var d = new Date();
console.log(d.getDay());


/**
 * 
 * 
 */

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

console.log(weekday[d.getDay()]);