/**
 * Write a JavaScript function to test whether a date is a weekend.

Note : Use standard Saturday/Sunday definition of a weekend.
Test Data :
console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));
Output :
"weekend"
"weekend"
undefined
 */

// your solution

function is_weekend(input) {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var d = new Date(input);
    if(days[d.getDay()] === "Sat" || days[d.getDay()] === "Sun") return "Weekend";
}
console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));