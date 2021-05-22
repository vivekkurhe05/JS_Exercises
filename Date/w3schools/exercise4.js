/**
 * Print the hours
 */

var d = new Date();
console.log(d.getHours());


/**
 * Print the specified hours
 */

d = new Date('July 21, 1983 01:15:00');
console.log(d.getHours());


/**
 * 
 * using getHours(), getMinutes() and getSeconds() to display the time
 */

// d = new Date();

function addZero (num) {

    if(num < 10){
        return '0' + num;
    }

    return num;
}

var hr = addZero(d.getHours());
var min = addZero(d.getMinutes());
var sec = addZero(d.getSeconds());
var time = hr + ':' + min + ':' + sec;
console.log(time);