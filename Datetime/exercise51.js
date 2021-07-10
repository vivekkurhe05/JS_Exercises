/**
 * Write a JavaScript function to get the week end date.
 */

// your solution

function endOfWeek(dt) {
    return dt.getDate() - dt.getDay() + (dt.getDay() === 0 ? 0 : 7);
}

let dt = new Date(2021, 5, 18);
console.log(endOfWeek(dt));