/**
 * Extract parts of a string:
 */

 var str = "Hello world!";
 var res = str.slice(0, 5);
 console.log(res);

 /**
  * Extract the whole string:
  */

 var res2 = str.slice(0);
 console.log(res2);

 /**
  * Extract from position 3, and to the end:
  */

 var res3 = str.slice(3)
 console.log(res3);

 /**
  * Extract the characters from position 3 to 8:
  */

 var res4 = str.slice(3, 8);
 console.log(res4);

 /**
  * Extract only the first character:
  */

 var res5 = str.slice(0, 1);
 console.log(res5);

 /**
  * Extract only the last character:
  */

 var res6 = str.slice(-1);
 console.log(res6);