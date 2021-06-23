/**
 * Write a JavaScript function to count the number of days passed since beginning of the year.

Test Data :
console.log(days_passed(new Date(2015, 0, 15)));
15
console.log(days_passed(new Date(2015, 11, 14)));
348
 */

// your solution

function days_passed(dt) {
    let d = new Date(dt.getFullYear(),0,1);
    let millisecTill2021 = d.getTime();
    let millisecSince70 = dt.getTime();
    let ms = millisecSince70 - millisecTill2021;
    return Math.round(ms/(60000*60*24)+1);

}
console.log(days_passed(new Date(2021, 5, 22)));
console.log(days_passed(new Date(2015, 0, 15)));
console.log(days_passed(new Date(2015, 11, 14)));