/**
 * Write a Python program to match if two words from a list of words starting with letter 'P'.
 */

// w3resource solution
function match_words(arr) {
  let regex = /(P\w+)\s(P\w+)/g;
  return arr.filter((el) => {
    return el.match(regex);
  });
}

let words = ["Python PHP", "Java JavaScript", "c c++", "Python Java"];
console.log(match_words(words));


    