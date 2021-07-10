/***
 * Write a JavaScript function to get ISO-8601 week number of year, weeks starting on Monday.
Example : 42 (the 42nd week in the year)
Test Data :
dt = new Date(2015, 10, 1);
console.log(ISO8601_week_no(dt));
44
 */

// your solution

function ISO8601_week_no(dt) {
    let minutes = 1000 * 60;
    let hours = minutes * 60;
    let days = hours * 24;
    let weeks = days * 7;
    let timeInMillisec = dt.getTime() - Date.parse(dt.getFullYear(), 01, 01);
    return Math.round(timeInMillisec/weeks);
}

dt = new Date();
console.log(ISO8601_week_no(dt));

dt = new Date(2015, 10, 1);
console.log(ISO8601_week_no(dt));