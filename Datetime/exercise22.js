/**
 * Write a JavaScript function to get ISO-8601 numeric representation of the day of the week (1 (for Monday) to 7 (for Sunday))
Test Data :
dt = new Date(2015, 10, 1);
console.log(ISO_numeric_date(dt));
7
 */

// your solution

function ISO_numeric_date(d) {
    return d.getDay() === 0 ? 7 : d.getDay();
}
dt = new Date(2015, 10, 1);
console.log(ISO_numeric_date(dt));