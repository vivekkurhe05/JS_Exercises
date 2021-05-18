/**
 * Print current month
 */

var d = new Date();
console.log(d.getMonth());

/**
 * 
 */

var month = new Array(12);
month = [
    "January", "February", 
    "March", "April", 
    "May", "June", 
    "July", "August", 
    "September", "October", 
    "November", "December"
];

console.log(month[d.getMonth()]);