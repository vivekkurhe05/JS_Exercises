/**
 * Write a JavaScript function to get time differences in minutes between two dates.
Test Data :
dt1 = new Date("October 13, 2014 11:11:00");
dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_minutes(dt1, dt2));
2
 */

// your solution

function diff_minutes(dt1, dt2) {
    let timeInMillisec1 = dt1.getTime();
    let timeInMillisec2 = dt2.getTime();
    let timeInMinutes = Math.abs(timeInMillisec1 - timeInMillisec2)/1000/60;
    return timeInMinutes;
}
dt1 = new Date("October 13, 2014 11:11:00");
dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_minutes(dt1, dt2));