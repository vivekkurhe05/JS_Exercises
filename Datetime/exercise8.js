/**
 * Write a JavaScript function to get difference between two dates in days.

Test Data :
console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'));
Output :
216
-28
 */

// your solution

function date_diff_indays(dt1, dt2) {
    let minutes = 1000 * 60;
    let hours = minutes * 60;
    let days = hours * 24;
    let d1 = new Date(dt1);
    let d2 = new Date(dt2);

    return Math.round((d1.getTime()/days) - (d2.getTime()/days));
}
console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'));