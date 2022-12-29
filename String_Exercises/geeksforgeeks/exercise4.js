/**
 * How to generate all combinations of a string in JavaScript ?
 * [ 'd', 'do', 'dog', 'o', 'og', 'g' ]
 */

// geeks for geeks solution
function possibleCombinations(str) {
  let temp = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      temp.push(str.slice(i, j));
    }
  }
  return temp;
}

console.log(possibleCombinations("dog"));
