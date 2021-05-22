/**
 * Return the hour, according to universal time:
 */

var d = new Date();
console.log(d.getUTCHours());

/**
 * Return the UTC hour from a specific date and time:
 */

d = new Date("July 21, 1983 01:15:00");
console.log(d.getUTCHours());

/**
 * Using getUTCHours(), getUTCMinutes(), and getUTCSeconds() to display the universal time:
 */

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

d = new Date();

var hrs = addZero(d.getUTCHours());
var min = addZero(d.getUTCMinutes());
var sec = addZero(d.getUTCSeconds());

var time = hrs + ":" + min + ":" + sec;

console.log(time);