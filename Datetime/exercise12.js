/**
 *  Write a JavaScript function to get the minimum date from an array of dates.

Test Data :
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/01/03"
 */

function min_date(arr) {
    let sorted_dates = arr.sort();
    return sorted_dates[0];
}
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));