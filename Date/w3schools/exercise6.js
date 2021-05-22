/**
 * Print the minutes
 */

function addZero (min) {

    if(min < 10) {
        min = "0" + min;
    }

    return min;
}


var d = new Date();
var min = addZero(d.getMinutes());

console.log(min);


/**
 * 
 * Return the minutes for a specified date and time
 */

function addZero (min) {

    if(min < 10) {
        min = "0" + min;
    }

    return min;
}

d = new Date("July 21, 1983 01:05:00");
var min = addZero(d.getMinutes());

console.log(min);

/***
 * Using getHours(), getMinutes(), and getSeconds() to display the time:
 */

function addZero (n) {

    if (n < 10) {
        n = "0" + n;
    }

    return n;
}

var hr = addZero(d.getHours());
var min = addZero(d.getMinutes());
var sec = addZero(d.getSeconds());
var time = hr + ":" + min + ":" + sec;

console.log(time);

