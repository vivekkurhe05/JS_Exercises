/**
 * Write a JavaScript function to get time differences in hours between two dates.
Test Data :
dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_hours(dt1, dt2));
3
 */

// your solution

function diff_hours(dt1, dt2) {
    let timeInMillisec1 = dt1.getTime();
    let timeInMillisec2 = dt2.getTime();
    let timeInHours = Math.abs(timeInMillisec1 - timeInMillisec2)/1000/60/60;
    return Math.round(timeInHours);
}
dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_hours(dt1, dt2));