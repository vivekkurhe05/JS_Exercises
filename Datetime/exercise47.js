/**
 * Write a JavaScript function to get time differences in weeks between two dates.
Test Data :
dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_weeks(dt1, dt2));
18
 */

function diff_weeks(dt1, dt2) {
    let timeInMillisec1 = dt1.getTime();
    let timeInMillisec2 = dt2.getTime();
    let weeks_difference = Math.abs(timeInMillisec1 - timeInMillisec2)/1000/60/60/24/7;
    return Math.round(weeks_difference);
}
dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_weeks(dt1, dt2));