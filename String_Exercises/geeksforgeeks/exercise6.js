/**
 * How to find the longest word within the string in JavaScript ?
 */

// my solution
function find_longest(str) {
  let str_arr = str.split(" ");
  let max = str_arr[0].length;

  str_arr.map((el) => {
    max = Math.max(el.length, max);
    return max;
  });

  result = str_arr.filter(function (elem) {
    return elem.length == max;
  });
  return result.join("");
}

console.log(
  find_longest("This is a demo String find the largest word from it")
);

console.log(
  find_longest(
    "Hello guys this is geeksforgeeks where students learn programming"
  )
);
