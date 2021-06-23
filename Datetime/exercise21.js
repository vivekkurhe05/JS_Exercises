/**
 * Write a JavaScript function to get a full textual representation of the day of the week (Sunday through Saturday).
Test Data :
dt = new Date(2015, 10, 1);
console.log(long_Days(dt));
"Sunday"
 */

// your solution

function long_Days(d) {
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekday[d.getDay()];
}
dt = new Date(2015, 10, 1);
console.log(long_Days(dt));