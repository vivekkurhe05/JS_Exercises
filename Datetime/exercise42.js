/**
 * Write a JavaScript function to add specified weeks to a date.
Test Data :
dt = new Date(2014,10,2);
console.log(add_weeks(dt, 10).toString());
Output :
"Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)"
 */

// your solution

function add_weeks(d, weeks) {
    let days = weeks * 7;
    return new Date(d.getFullYear(), d.getMonth(), d.getDate()+days);
}
dt = new Date(2014,10,2);
console.log(add_weeks(dt, 10).toString());