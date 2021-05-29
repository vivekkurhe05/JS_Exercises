/**
 * Search a string for "ain":
 */

 var str = "The rain in SPAIN stays mainly in the plain";

 var res = str.match(new RegExp('ain','g'));
 console.log(res);

 /**
  * Perform a global, case-insensitive search for "ain":
  */

 var res2 = str.match(new RegExp('ain','gi'));
 console.log(res2);