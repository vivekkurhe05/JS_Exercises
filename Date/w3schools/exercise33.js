/**
 * Set the minutes to 17, according to UTC time:
 */

 var d = new Date();
 d.setUTCMinutes(17, 0, 0);
 console.log(d);

 /**
  * Set the date time to be 90 minutes ago, using UTC methods:
  */

 d = new Date();
 d.setUTCMinutes(d.getUTCMinutes() - 90);
 console.log(d);