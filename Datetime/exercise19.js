/**
 * Write a JavaScript function to get the day of the month, 2 digits with leading zeros.
Test Data :
d= new Date(2015, 10, 1);
console.log(day_of_the_month(d));
"01"
 */

// your solution

function day_of_the_month(dt) {

    let day = dt.getDate();

    return day < 10 ? "0"+day : day;
}
let d= new Date(2015, 10, 1);
console.log(day_of_the_month(d));