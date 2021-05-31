/**
 * Write a JavaScript program to calculate days left until next Christmas.
 */

var xmas = new Date(new Date().getFullYear(), 11, 25);
var timeInMillisecUptoXmas = xmas.getTime()
var timeInMillisecTillNow = Date.parse(new Date());
var timeDifferenceInMillisec = timeInMillisecUptoXmas - timeInMillisecTillNow;

var minutes = 1000 * 60;
var hours = minutes * 60;
var days = hours * 24;

console.log(Math.round(timeDifferenceInMillisec / days));
