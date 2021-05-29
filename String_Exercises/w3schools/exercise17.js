/**
 * Extract parts of a string:
 */

 var str = "Hello world!";
 var n = str.substr(1, 4);
 console.log(n);

 /**
  * Begin the extraction at position 2, and extract the rest of the string:
  */

 console.log(str.substr(2));

 /**
  * Extract only the first character:
  */

 console.log(str.substr(0, 1));

 /**
  * Extract only the last character:
  */

 console.log(str.substr(11,1));