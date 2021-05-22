/**
 * Set the seconds to 35, according to UTC time:
 */

var d = new Date();
d.setUTCSeconds(35);
console.log(d.toString());

/**
 * Set both the seconds and milliseconds, according to UTC:
 */

d = new Date();
d.setUTCSeconds(d.getUTCSeconds(), d.getUTCMilliseconds());
console.log(d);