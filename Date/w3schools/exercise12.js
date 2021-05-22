/**
 * Return the day of the week, according to universal time:
 */

var d = new Date();
console.log(d.getUTCDay());


/**
 * Return the name of the weekday (not just a number):
 */

var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(weekday[d.getUTCDay()]);