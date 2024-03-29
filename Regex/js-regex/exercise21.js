/**
 * Write a JavaScript function to print an integer with commas as thousands separators.
 * 
 * Test Data :
console.log(thousands_separators(1000));
"1,000"
console.log(thousands_separators(10000.23));
"10,000.23"
console.log(thousands_separators(100000));
"100,000"
 */

// w3resource
function thousands_separators(num) {
  num = num.toString().split(".");
  num[0] = num[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num.join(".");
}

console.log(thousands_separators(1000));
console.log(thousands_separators(10000.23));
console.log(thousands_separators(100000));