/**
 * Return the milliseconds, according to UTC:
 */

var d = new Date();
console.log(d.getUTCMilliseconds());

/**
 * Return the UTC milliseconds from a specific date and time:
 */

d = new Date("July 21, 1983 01:15:00:195");
console.log(d.getUTCMilliseconds());

/**
 * Using getHours(), getMinutes(), getSeconds(), and getMilliseconds() to display the UTC time (with milliseconds):
 */

function addZero(i, len) {

    while(i.toString().length < len) {
        i = "0" + i;
    }
    return i;
}

d = new Date();

var hrs = addZero(d.getUTCHours(), 2);
var min = addZero(d.getUTCMinutes(), 2);
var sec = addZero(d.getUTCSeconds(), 2);
var ms = addZero(d.getUTCMilliseconds(),3);

var time = hrs + ":" + min + ":" + sec + ":" + ms;

console.log(time);