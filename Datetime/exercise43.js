/**
 * Write a JavaScript function to add specified months to a date.
Test Data :
dt = new Date(2014,10,2);
console.log(add_months(dt, 10).toString());
Output :
"Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"
 */

// your solution

function add_months(dt, months) {
    return new Date(dt.getFullYear(), dt.getMonth()+10, dt.getDate());
}
dt = new Date(2014,10,2);
console.log(add_months(dt, 10).toString());