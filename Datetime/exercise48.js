/**
 * Write a JavaScript function to get time differences in months between two dates.
Test Data :
dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_months(dt1, dt2));
5
 */

// your solution

function diff_months(dt1, dt2) {
    let timeInMillisec1 = dt1.getTime();
    let timeInMillisec2 = dt2.getTime();
    let months_difference = Math.abs(timeInMillisec1 - timeInMillisec2)/1000/60/60/24/7/4;
    return Math.round(months_difference);
}
dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_months(dt1, dt2));