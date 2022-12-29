/**
 * How to replace characters except last with the specified mask character in JavaScript ?
 */

// my solution
function MaskCharacter(str, mask, num) {
  if (num == undefined) num = 1;
  let substr = str.substring(0, str.length - num);
  let n = substr.length;
  let re = new RegExp("^\\d{1," + n + "}", "g");
  return str.replace(re, new Array(n + 1).join(mask));
}
console.log(MaskCharacter("9823207515", "#", 2));
console.log(MaskCharacter("8237103332", "#"));
