/**
 * Write a JavaScript function to get the month end date.
 */

// your solution

function endOfMonth(dt) {
    return new Date(dt.getFullYear(), dt.getMonth()+1, 0);
}

let dt = new Date();
console.log(endOfMonth(dt).toString());