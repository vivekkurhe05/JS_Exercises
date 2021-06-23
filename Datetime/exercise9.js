/**
 * Write a JavaScript function to get the last day of a month.

Test Data :
console.log(lastday(2014,0));
console.log(lastday(2014,1));
console.log(lastday(2014,11));
Output :
31
28
31
 */

// your solution and w3resource solution

function lastday(year, month) {
    return new Date(year, month+1, 0).getDate();
}
console.log(lastday(2014,0));
console.log(lastday(2014,1));
console.log(lastday(2014,11));