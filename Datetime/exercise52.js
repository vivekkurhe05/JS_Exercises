/**
 * Write a JavaScript function to get the month start date.
 */

// your solution

function startOfMonth(dt) {
    return new Date(dt.getFullYear(), dt.getMonth(), 1);
}

let dt = new Date();
console.log(startOfMonth(dt).toString());