/**
 * Write a JavaScript function to check whether a given value is US zip code or not.
 * might be either five digits or five digits followed a hyphen (dash) and another four digits (12345-1234)
 */

// my solution
function is_usZipCode(zipcode) {
  let re = /[0-9]{5}(?:-[0-9]{4})?/;

  return re.test(zipcode);
}

console.log(is_usZipCode("03201-2150")); // true

console.log(is_usZipCode("7892")); // false

console.log(is_usZipCode("23432")); // true