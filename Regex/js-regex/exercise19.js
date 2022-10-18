/**
 * Write a JavaScript function to check whether a given value is html or not.
 */

// my solution
function is_html(str) {
  let re = /^<\/?[a-zA-Z]+>$/;
  return re.test(str);
}

console.log(is_html(""));

console.log(is_html(""));

console.log(is_html(".selector"));

console.log(is_html("<html>"));

console.log(is_html("</html>"));
