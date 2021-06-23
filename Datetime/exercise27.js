/**
 * Write a JavaScript function to get a short textual representation of a month, three letters (Jan through Dec).
Test Data :
dt = new Date(2015, 10, 1);
console.log(short_months(dt));
"Nov"
 */

// your solution

function short_months(d) {
    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return month[d.getMonth()];
}
dt = new Date(2015, 10, 1);
console.log(short_months(dt));