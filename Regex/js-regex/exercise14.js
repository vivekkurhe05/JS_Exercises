/**
 * Write a JavaScript function to check whether a given value is Canada Post Code or not.
 */

// my solution
function is_caPostalCode(zipcode) {
  let re = /^[A-K][0-9][A-V]\s?[0-9][A-Z][0-9]$/;

  return re.test(zipcode);
}

console.log(is_caPostalCode("K8V3Y1")); // true

console.log(is_caPostalCode("K8V 3Y1")); // true

console.log(is_caPostalCode("A1A 1A1")); // true

console.log(is_caPostalCode("Z4V4X1")); // false
