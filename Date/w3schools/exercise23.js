/**
 * Set the hour to 15:
 */

var d = new Date();
d.setHours(15);
console.log(d.toDateString()+" "+d.toTimeString());

/**
 * Set the time to 15:35:01
 */

d.setHours(15, 35, 1);
console.log(d.toDateString()+" "+d.toTimeString());

/**
Set the time to 48 hours ago:
 */

 d.setHours(d.getHours()-48);
 console.log(d.toDateString()+" "+d.toTimeString());

 