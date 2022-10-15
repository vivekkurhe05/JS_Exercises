/**
 * Write a JavaScript program to count number of words in string. Go to the editor
Note :
- Remove white-space from start and end position.
- Convert 2 or more spaces to 1.
- Exclude newline with a start spacing.
 */

// my solution

function count_words(str) {
  let first_str = str.replace(/^\s+|\s+$/g, "");
  let second_str = first_str.replace(/\s+/g, " ");
  return second_str.match(/\s/g).length + 1;
}

console.log(count_words(" The quick brown  fox jumps over  the lazy dog "));