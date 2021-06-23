/**
 * Write a JavaScript function to get 12-hour format of an hour with leading zeros.
Test Data :
dt = new Date(1989, 10, 1);
console.log(hours_with_zeroes(dt));
"12"
 */

// your solution

function hours_with_zeroes(d) {
    let hours = d.getHours();

    let addZero = function (hours) {
        if(hours < 10){
            hours = "0" + hours;
        }
        return hours;
    }

    if(hours > 11){
        hours = hours -12;
    }
    return addZero(hours);
}

dt = new Date();
console.log(hours_with_zeroes(dt));