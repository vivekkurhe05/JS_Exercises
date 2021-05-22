/**
 * Print the milliseconds
 */

var d = new Date();
console.log(d.getMilliseconds());

/**
 * 
 * Print the specified milliseconds
 */

d = new Date('July 21, 1983 01:15:00:526');
console.log(d.getMilliseconds());

/**
 * 
 * Using getHours(), getMinutes(), getSeconds(), and getMilliseconds() to display the time (with milliseconds):
 */

function addZero (num, len) {
    while (num.toString().length < len){
        num = '0' + num;
    }

    return num;
}

d = new Date('July 21, 1983 01:15:00:9');

var hr = addZero(d.getHours(), 2);
var min = addZero(d.getMinutes(), 2);
var sec = addZero(d.getSeconds(), 2);
var ms = addZero(d.getMilliseconds(), 3);
var time = hr + ':' + min + ':' + sec + ':' + ms;

console.log(time);