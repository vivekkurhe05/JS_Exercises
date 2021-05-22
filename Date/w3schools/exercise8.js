/**
 * Print the seconds
 */

var d = new Date();
console.log(d.getSeconds());

/**
 * 
 */

function addZero (i) {

    if (i < 10){
        i = "0" + i;
    }
    return i;
}

var hr = addZero(d.getHours());
var mn = addZero(d.getMinutes());
var sc = addZero(d.getSeconds());
var time = hr + ":" + mn + ":" + sc;

console.log(time);