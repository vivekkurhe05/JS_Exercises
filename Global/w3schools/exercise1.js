/**
 * Encode a URI:
 */

 var uri = "my test.asp?name=ståle&car=saab";
 var res = encodeURI(uri);
 console.log(res);

 /**
  * Encode a URI component
  */

 var res2 = encodeURIComponent(uri);
 console.log(res2);


 /**
  * Decode a encodeURI
  */
 var res3 = decodeURI(res);
 console.log(res3);

 /**
  * Decode a encodeURIComponent
  */

 var res4 = decodeURIComponent(uri);
 console.log(res4);