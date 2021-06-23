/**
 * Write a JavaScript function to get a full textual representation of a month, such as January or June.
Test Data :
dt = new Date(2015, 10, 1);
console.log(full_month(dt));
"November"
 */

// your solution

function full_month(d) {
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return month[d.getMonth()];
}
dt = new Date(2015, 10, 1);
console.log(full_month(dt));