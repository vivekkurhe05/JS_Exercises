/**
 * Write a JavaScript function to get a numeric representation of a month, with leading zeros (01 through 12).
Test Data :
dt = new Date(2015, 10, 1);
console.log(numeric_month(dt));
"11"
 */

// your solution

function numeric_month(d) {
    return d.getMonth() < 10 ? "0"+d.getMonth() : d.getMonth();
}
dt = new Date(2015, 10, 1);
console.log(numeric_month(dt));