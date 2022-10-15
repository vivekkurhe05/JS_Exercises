/**
 * Write a JavaScript function to check whether a given value is alpha numeric or not.
 */

function is_alphaNumeric(str) {
  let re = /^[A-Za-z0-9]+$/;

  return re.test(str);
}

console.log(is_alphaNumeric("37828sad"));

console.log(is_alphaNumeric("3243#$sew"));