/**
 * Write a JavaScript function to get a two digit representation of a year.
Examples : 79 or 04
Test Data :
dt = new Date(1989, 10, 1);
console.log(sort_year(dt));
"89"
 */

// your solution

function sort_year(d) {
    return d.getFullYear().toString().slice(-2);
}
dt = new Date(1989, 10, 1);
console.log(sort_year(dt));