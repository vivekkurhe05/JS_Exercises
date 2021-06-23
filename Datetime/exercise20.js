/**
 * Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun).
Test Data :
dt = new Date(2015, 10, 1);
console.log(short_Days(dt));
"Sun"
 */

// your solution

function short_Days(d) {
    let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekday[dt.getDay()];
}

dt = new Date(2015, 10, 1);
console.log(short_Days(dt));
