/**
 * Write a JavaScript function to check whether a given value is UK Post Code or not.
 */

// my solution
function is_ukPostCode(zipcode) {
  let re = /^[A-Za-z0-9]{3}[A-Za-z0-9]?[\s]?[A-Za-z0-9]{3}$/;

  return re.test(zipcode);
}

console.log(is_ukPostCode("CW3 9SS")); // true
console.log(is_ukPostCode("SE5 0EG")); // true
console.log(is_ukPostCode("SE50EG")); // true
console.log(is_ukPostCode("se5 0eg")); // true
console.log(is_ukPostCode("WC2H 7LT")); // true
console.log(is_ukPostCode("PO1 3AX")); // true
console.log(is_ukPostCode("B294HJ")); // true

console.log(is_ukPostCode("aWC2H 7LT")); // false
console.log(is_ukPostCode("WC2H 7LTa")); // false
console.log(is_ukPostCode("WC2H")); // false
console.log(is_ukPostCode("7892")); // false
