/**
 * Write a JavaScript function to get the maximum date from an array of dates.

Test Data :
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/02/02"

date format is yyyy/mm/dd
 */

// your solution

function max_date(all_dates) {
    let sorted_dates = all_dates.sort().reverse();
    return sorted_dates[0];
}
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));

// w3resource solution

function max_date(all_dates) {
    var max_dt = all_dates[0],
        max_dtObj = new Date(all_dates[0]);
    all_dates.forEach(function (dt) {
        if (new Date(dt) > max_dtObj) {
            max_dt = dt;
            max_dtObj = new Date(dt);
        }
    });
    return max_dt;
}
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));