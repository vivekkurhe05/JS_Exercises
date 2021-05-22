/**
Set the minutes to 17:
 */

 var d = new Date();
 d.setMinutes(17);
 console.log(d.getMinutes());
 console.log(d.toDateString()+" "+d.toTimeString());

 /**
 Set the date time to be 90 minutes ago:
  */

d = new Date();
  d.setMinutes(d.getMinutes()-90);
  console.log(d.toDateString()+" "+d.toTimeString());