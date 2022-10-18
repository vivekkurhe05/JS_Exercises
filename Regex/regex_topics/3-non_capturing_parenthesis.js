// Non-capturing parenthesis
// Exclude a capture group from results/array of the matches
// ?: at the start of the parenthesis
// it will still be a part of the complete match, but it won't be a separate array item

let str = "Hehehe Funny!";
let rex = /(he)+ (\w+)!/;
let match = str.match(rex);
console.log(match);

let rex2 = /(?:he)+ (\w+)!/;
let match2 = str.match(rex2);
console.log(match2)