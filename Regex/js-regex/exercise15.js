/**
 * Write a JavaScript function to check whether a given value is a social security number or not.
 */

// my solution
function is_socialSecurity_Number(num) {
  let re = /^([0-9]{3})-([0-9]{2})-([0-9]{4})$/;

  return re.test(num);
}

console.log(is_socialSecurity_Number("019-90-5680"));

console.log(is_socialSecurity_Number("K8V-3Y1"));
