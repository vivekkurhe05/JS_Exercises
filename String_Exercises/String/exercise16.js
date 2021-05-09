/**
 * 
 * Write a JavaScript function to truncates a string if it is longer than the specified number of characters. 
 * Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.
 * Test Data :
 * console.log(text_truncate('We are doing JS string exercises.'))
 * console.log(text_truncate('We are doing JS string exercises.',19))
 * console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
 * "We are doing JS string exercises."
 * "We are doing JS ..."
 * "We are doing !!"
 */

function text_truncate(str, len, sign){
    if (len == null) {
        len = 100;
      }
      if (sign == null) {
        sign = '...';
      }

    if(str.length > len){
        console.log('len = ',len);
        console.log('Length of sign',sign.length);
        console.log(len - sign.length);
        return str.substring(0, len - sign.length) + sign;
    }else{
        return str;
    }
}

// console.log(text_truncate('We are doing JS string exercises.'));
// console.log(text_truncate('We are doing JS string exercises.',19));
console.log(text_truncate('We are doing JS string exercises.',15,'!!'));