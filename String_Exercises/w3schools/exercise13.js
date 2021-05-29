/**
 * Search for "W3Schools":
 */

 var str = "Visit W3Schools!";
 var res = str.search("W3Schools");
 console.log(res);

 /**
  * Perform a case-sensitive search:
  */

  var str2 = "Mr. Blue has a blue house";
  var n = str2.search("blue");
  console.log(n);

  /**
   * Perform a case-insensitive search:
   */

   var str3 = "Mr. Blue has a blue house";
   var n2 = str3.search(/blue/i);
   console.log(n2)