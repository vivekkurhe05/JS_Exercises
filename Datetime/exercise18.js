/**
 * Write a JavaScript program to calculate age.

Test Data :
console.log(calculate_age(new Date(1982, 11, 4)));
32
console.log(calculate_age(new Date(1962, 1, 1)));
53
 */

// your solution

function calculate_age(dt) {
    let currentDate = new Date();
    let timeInMillisec = currentDate.getTime() - dt.getTime();
    return Math.round(timeInMillisec/(60000*24*60*365));
}
console.log(calculate_age(new Date(1982, 1, 1)));
console.log(calculate_age(new Date(1962, 1, 1)));