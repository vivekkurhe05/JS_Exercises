/**
 * Return a string where "Microsoft" is replaced with "W3Schools":
 */

 var str = "Visit Microsoft!";
 var res = str.replace('Microsoft', 'W3Schools');
 console.log(res);

 /**
  * Perform a global replacement:
  */

  var str2 = "Mr Blue has a blue house and a blue car";
  var res2 = str2.replace(new RegExp('blue','g'), "red");
  console.log(res2);

  /**
   * Perform a global, case-insensitive replacement:
   */

   var str3 = "Mr Blue has a blue house and a blue car";
   var res3 = str3.replace(new RegExp('blue','gi'), 'red');
   console.log(res3);

   /**
    * Using a function to return the replacement text:
    */

    var str4 = "Mr Blue has a blue house and a blue car";
    var res4 = str4.replace(new RegExp('blue|house|car', 'gi'), function(text){
        return text.toUpperCase();
    });
    console.log(res4);