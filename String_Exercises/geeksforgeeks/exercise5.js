/**
 * How to get the number of occurrences of each letter in specified string in JavaScript ?
 */

// my solution

function count_occurrences(str) {
  let temp = [];

  for (let i = 0; i < str.length; i++) {
    let chr = str[i];
    let index = str.indexOf(chr, 0);
    let count = 0;

    while (index != -1) {
      count++;
      index = str.indexOf(chr, index + 1);
    }

    if (str[i] === " ") continue;
    if (!temp.includes(str[i])) {
      temp.push([str[i], count]);
    }
  }
  let obj = Object.fromEntries(temp);

  for (let key in obj) {
    console.log(key + ":" + obj[key]);
  }
}
count_occurrences("my name is vivek");
