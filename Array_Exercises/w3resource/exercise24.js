/**
 * Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]
 */

// my solution
function filter_array(arr) {
  return arr.filter((el) => {
    if (Number.isNaN(el)) return;
    return typeof el == "number" && el != 0;
  });
}

console.log(filter_array([NaN, 0, 15, false, -22, "", undefined, 47, null]));
